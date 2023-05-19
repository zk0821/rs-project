import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Chart } from "chart.js";

import { BsFire } from "react-icons/bs";
import { RiFootprintLine } from "react-icons/ri";
import { FaRunning } from "react-icons/fa";
import { IoBicycle, IoFootsteps } from "react-icons/io5";
import { GiPathDistance } from "react-icons/gi";
import { TbSum } from "react-icons/tb";

const countActivityPerDates = (activities, dates, array_count) => {
    let arr = [];
    for (let i = 0; i < array_count; i++) {
        arr.push(0);
    }
    activities.all.forEach((activity) => {
        let activity_start = new Date(activity.start).getDate();
        for (let i = 0; i < dates.length; i++) {
            let date = new Date(dates[i]).getDate();
            if (activity_start - date == 0) {
                arr[i] += 1;
            }
        }
    });
    return arr;
};

const createActivityChart = (cycling) => {
    let dates = [];
    const date = new Date();
    for (let i = 0; i < 30; i++) {
        dates.push(date.toISOString().substring(0, 10));
        date.setDate(date.getDate() - 1);
    }
    dates = dates.reverse();
    let cycling_data = countActivityPerDates(cycling, dates, 30);

    var el = document.getElementById("myChart");
    if (el) {
        var ctx = el.getContext("2d");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: dates,
                datasets: [
                    {
                        data: cycling_data,
                        label: "Cycling",
                        borderColor: "#04e762",
                        backgroundColor: "#04e762",
                        fill: false,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: "Number of activities",
                        },
                    },
                    x: {
                        title: {
                            display: true,
                            text: "Date",
                        },
                    },
                },
            },
        });
    }
};

const createEmptyActivityObject = () => {
    return {
        all: [],
        total_steps: 0,
        total_calories: 0,
        total_distance: 0,
    };
};

const handleActivityData = (data, height, weight) => {
    let whole_activity_object = {
        all: [],
        total_steps: 0,
        total_calories: 0,
        total_distance: 0,
    };
    let activity_object = {
        total_num_steps: 0,
        start: null,
        last_end: null,
        calories: 0,
        distance: 0,
    };
    data.forEach((activity) => {
        let stride = 0;
        if (0 <= activity.steps < 2) {
            stride = height / 5;
        } else if (2 <= activity.steps < 3) {
            stride = height / 4;
        } else if (3 <= activity.steps < 4) {
            stride = height / 3;
        } else if (4 <= activity.steps < 5) {
            stride = height / 2;
        } else if (5 <= activity.steps < 6) {
            stride = height / 1.2;
        } else if (6 <= activity.steps < 8) {
            stride = height;
        } else {
            stride = 1.2 * height;
        }
        let speed = (activity.steps * stride) / 2;
        let distance = speed * 2;
        let calories = (speed * weight) / 400;
        let datetime = new Date(activity.time + " UTC");
        if (activity_object.start != null) {
            // If within 5 minutes -> count as same activity
            if (datetime - activity_object.last_end < 300_000) {
                activity_object.total_num_steps += activity.steps;
                activity_object.last_end = datetime;
                activity_object.calories += calories;
                activity_object.distance += distance;
            } else {
                whole_activity_object.all.push(activity_object);
                whole_activity_object.total_steps +=
                    activity_object.total_num_steps;
                whole_activity_object.total_calories +=
                    activity_object.calories;
                whole_activity_object.total_distance +=
                    activity_object.distance;
                activity_object = {
                    total_num_steps: 0,
                    start: null,
                    last_end: null,
                    calories: 0,
                    distance: 0,
                };
            }
        }
        if (activity_object.start == null) {
            activity_object.start = datetime;
            activity_object.last_end = datetime;
            activity_object.total_num_steps += activity.steps;
            activity_object.calories += calories;
            activity_object.distance += distance;
        }
    });
    // Push the final object
    if (activity_object.start != null) {
        whole_activity_object.all.push(activity_object);
        whole_activity_object.total_steps += activity_object.total_num_steps;
        whole_activity_object.total_calories += activity_object.calories;
        whole_activity_object.total_distance += activity_object.distance;
    }
    return whole_activity_object;
};

const Cycling = () => {
    const ref = useRef({}).current;
    const [height, setHeight] = useState(1.7);
    ref.height = height;
    const [weight, setWeight] = useState(70);
    ref.weight = weight;
    const [activityData, setActivityData] = useState({
        cycling: {
            all: [],
            total_steps: 0,
            total_calories: 0,
            total_distance: 0,
        },
    });
    const [apiRead, setApiRead] = useState(false);
    const [loadingData, setLoadingData] = useState();
    const [apiError, setApiError] = useState();
    // API
    const getActivityData = async () => {
        setLoadingData(true);
        try {
            setApiRead(false);
            const result = await fetch(
                "https://www.songify.si/rs/mqtt-project",
                { method: "GET" }
            );
            const json = await result.json();
            // Cycling
            let cycling_object;
            if (json.cycling) {
                cycling_object = handleActivityData(
                    json.cycling,
                    ref.height,
                    ref.weight
                );
            } else {
                cycling_object = createEmptyActivityObject();
            }
            /* Chart */
            createActivityChart(cycling_object);
            /* Activity data */
            setActivityData({
                cycling: cycling_object,
            });
            /* API too fast :) */
            await new Promise((resolve) => setTimeout(resolve, 2000));
            /* API variables */
            setApiError();
            setApiRead(true);
            setLoadingData(false);
        } catch (e) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setApiError(e.toString());
            setApiRead(false);
            setLoadingData(false);
        }
    };
    useEffect(() => {
        // Initiate the first call
        getActivityData();
        // Call every 2 seconds
        const intervalCall = setInterval(() => {
            getActivityData();
        }, 300_000);
        return () => {
            clearInterval(intervalCall);
        };
    }, []);
    return (
        <>
            <main className="p-6 sm:p-10 space-y-6">
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                    <div className="mr-6">
                        <h3 className="text-lg text-slate-600">
                            STM Activity Tracker
                        </h3>
                        <h1 className="text-4xl font-semibold mb-2">
                            Cycling Details
                        </h1>
                        <h2 className="text-gray-600 ml-0.5">
                            For the last 30 days.
                        </h2>
                        <h2 className="text-gray-600 ml-0.5">
                            Automatically refreshes every 5 minutes.
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {loadingData && (
                        <div
                            className="p-2 bg-blue-600 items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex"
                            role="alert"
                        >
                            <span className="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                                INFO
                            </span>
                            <span className="font-semibold mr-2 text-left flex-auto">
                                Refreshing activity data
                            </span>
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 mr-2 text-white animate-spin dark:text-gray-600 fill-white"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                    {apiError && apiError.length != 0 && (
                        <div
                            className="p-2 bg-red-600 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex"
                            role="alert"
                        >
                            <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                                ERROR
                            </span>
                            <span className="font-semibold mr-2 text-left flex-auto">
                                {apiError}
                            </span>
                        </div>
                    )}
                </div>
                <h1 className="text-xl font-semibold mb-2">Measurements</h1>
                <section className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
                    <div className="flex items-end justify-between p-8 bg-white shadow rounded-lg">
                        <div>
                            <span className="block text-2xl font-bold mb-4">
                                Height
                            </span>
                            <label
                                htmlFor="large-input-height"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Please input your height (m):
                            </label>
                            <input
                                type="text"
                                id="large-input-height"
                                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500"
                                value={height}
                                onChange={(event) => {
                                    setHeight(event.target.value);
                                }}
                            ></input>
                        </div>
                        <div>
                            <button
                                onClick={getActivityData}
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-2 border border-gray-400 rounded shadow"
                            >
                                Refresh
                            </button>
                        </div>
                    </div>
                    <div className="flex items-end justify-between p-8 bg-white shadow rounded-lg">
                        <div>
                            <span className="block text-2xl font-bold mb-4">
                                Weight
                            </span>
                            <label
                                htmlFor="large-input-weight"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Please input your weight (kg):
                            </label>
                            <input
                                type="text"
                                id="large-input-weight"
                                className="w-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500"
                                value={weight}
                                onChange={(event) => {
                                    setWeight(event.target.value);
                                }}
                            ></input>
                        </div>
                        <div>
                            <button
                                onClick={getActivityData}
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-2 border border-gray-400 rounded shadow"
                            >
                                Refresh
                            </button>
                        </div>
                    </div>
                </section>
                <h1 className="text-xl font-semibold mb-2">
                    Cycling Information (last 30 days)
                </h1>
                <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                            <IoBicycle size="2rem" />
                        </div>
                        <div>
                            {!apiRead && (
                                <span className="block text-2xl font-bold">
                                    ---
                                </span>
                            )}
                            {apiRead && (
                                <span className="block text-2xl font-bold">
                                    {activityData.cycling.all.length}
                                </span>
                            )}
                            <span className="block text-gray-500">
                                Cycling activities
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                            <IoFootsteps size="2rem" />
                        </div>
                        <div>
                            {!apiRead && (
                                <span className="block text-2xl font-bold">
                                    ---
                                </span>
                            )}
                            {apiRead && (
                                <span className="block text-2xl font-bold">
                                    {activityData.cycling.total_steps}
                                </span>
                            )}
                            <span className="block text-gray-500">
                                Total steps
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                            <BsFire size="2rem" />
                        </div>
                        <div>
                            {!apiRead && (
                                <span className="block text-2xl font-bold">
                                    ---
                                </span>
                            )}
                            {apiRead && (
                                <span className="block text-2xl font-bold">
                                    {activityData.cycling.total_calories.toFixed(
                                        2
                                    )}{" "}
                                    kcal
                                </span>
                            )}
                            <span className="block text-gray-500">
                                Total calories
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                            <GiPathDistance size="2rem" />
                        </div>
                        <div>
                            {!apiRead && (
                                <span className="block text-2xl font-bold">
                                    ---
                                </span>
                            )}
                            {apiRead && (
                                <span className="block text-2xl font-bold">
                                    {activityData.cycling.total_distance.toFixed(
                                        2
                                    )}{" "}
                                    m
                                </span>
                            )}
                            <span className="block text-gray-500">
                                Total distance
                            </span>
                        </div>
                    </div>
                </section>
                <section className="grid md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 xl:grid-flow-col gap-6">
                    <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">
                            Cycling chart (last 30 days)
                        </div>
                        <div className="p-4 flex-grow">
                            <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-white border-2 border-gray-200 border-dashed rounded-md">
                                <span
                                    style={{
                                        display: !apiRead ? "block" : "none",
                                    }}
                                >
                                    Loading activity chart...
                                </span>
                                <canvas
                                    id="myChart"
                                    style={{
                                        display: apiRead ? "block" : "none",
                                    }}
                                ></canvas>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Cycling;
