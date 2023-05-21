import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Chart } from "chart.js";

import { RiFootprintLine } from "react-icons/ri";
import { FaRunning } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";
import { TbSofa } from "react-icons/tb";

const countActivityPerDates = (
    activities,
    dates,
    array_count,
    date_distance_in_seconds
) => {
    let arr = [];
    for (let i = 0; i < array_count; i++) {
        arr.push(0);
    }
    activities.forEach((activity) => {
        let activity_start = new Date(activity.time + " UTC");
        for (let i = 0; i < dates.length; i++) {
            let curr_date_object = new Date(dates[i]);
            if (
                differenceBetweenDates(activity_start, curr_date_object) <
                date_distance_in_seconds
            ) {
                arr[i] += activity.steps;
            }
        }
    });
    return arr;
};

const createStepChart = (walking, running, cycling) => {
    let date_distance_in_seconds = 10;
    let dates = [];
    let date = new Date();
    let full_dates = [];
    for (let i = 0; i < 30; i++) {
        full_dates.push(date);
        dates.push(date.toLocaleTimeString());
        date = new Date(
            date.setSeconds(date.getSeconds() - date_distance_in_seconds)
        );
    }
    full_dates = full_dates.reverse();
    dates = dates.reverse();
    let walking_data = countActivityPerDates(
        walking,
        full_dates,
        30,
        date_distance_in_seconds
    );
    let running_data = countActivityPerDates(
        running,
        full_dates,
        30,
        date_distance_in_seconds
    );
    let cycling_data = countActivityPerDates(
        cycling,
        full_dates,
        30,
        date_distance_in_seconds
    );

    var el = document.getElementById("myChart");
    if (el) {
        var ctx = el.getContext("2d");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: dates,
                datasets: [
                    {
                        data: walking_data,
                        label: "Walking",
                        borderColor: "#00bbf9",
                        backgroundColor: "#00bbf9",
                        fill: false,
                    },
                    {
                        data: running_data,
                        label: "Running",
                        borderColor: "#ff4242",
                        backgroundColor: "#ff4242",
                        fill: false,
                    },
                    {
                        data: cycling_data,
                        label: "Cycling",
                        borderColor: "#04e762",
                        backgroundColor: "#04e762",
                        fill: false,
                    },
                ],
            },
        });
    }
};

const differenceBetweenDates = (date_a, date_b) => {
    let diff = Math.abs(date_a - date_b) / 1000;
    return diff;
};

/* 0 - Idle, 1 - Walking, 2 - Running, 3 - Cycling */
const findLatestActivity = (walking, running, cycling) => {
    let chart_length_in_seconds = 30 * 10;
    let current_date = new Date();
    let walking_date = null;
    walking.all.forEach((walk) => {
        let walk_datetime = new Date(walk.last_end);
        if (
            differenceBetweenDates(current_date, walk_datetime) <=
                chart_length_in_seconds &&
            (walking_date == null || walk_datetime - walking_date > 0)
        ) {
            walking_date = walk_datetime;
        }
    });
    let running_date = null;
    running.all.forEach((run) => {
        let run_datetime = new Date(run.start);
        if (
            differenceBetweenDates(current_date, run_datetime) <=
                chart_length_in_seconds &&
            (running_date == null || run_datetime - running_date > 0)
        ) {
            running_date = run_datetime;
        }
    });
    let cycling_date = null;
    cycling.all.forEach((cycling) => {
        let cycling_datetime = new Date(cycling.start);
        if (
            differenceBetweenDates(current_date, cycling_datetime) <=
                chart_length_in_seconds &&
            (cycling_date == null || cycling_datetime - cycling_date > 0)
        ) {
            cycling_date = cycling_datetime;
        }
    });
    // Check all 3
    if (walking_date) {
        if (running_date) {
            if (cycling_date) {
                if (
                    walking_date - running_date > 0 &&
                    walking_date - cycling_date > 0
                ) {
                    return 1;
                }
            } else {
                if (walking_date - running_date > 0) {
                    return 1;
                }
            }
        } else {
            return 1;
        }
    }
    // Check running and cycling
    if (running_date) {
        if (cycling_date) {
            if (running_date - cycling_date > 0) {
                return 2;
            }
        } else {
            return 2;
        }
    }
    // Check cycling
    if (cycling_date) {
        return 3;
    }
    // Idle
    return 0;
};

const createEmptyActivityObject = () => {
    return {
        all: [],
    };
};

const handleActivityData = (data) => {
    let whole_activity_object = {
        all: [],
    };
    let activity_object = {
        total_num_steps: 0,
        start: null,
        last_end: null,
    };
    data.forEach((activity) => {
        let datetime = new Date(activity.time + " UTC");
        if (activity_object.start != null) {
            // If within 5 minutes -> count as same activity
            if (datetime - activity_object.last_end < 300_000) {
                activity_object.total_num_steps += activity.steps;
                activity_object.last_end = datetime;
            } else {
                whole_activity_object.all.push(activity_object);
                activity_object = {
                    total_num_steps: 0,
                    start: null,
                    last_end: null,
                };
            }
        }
        if (activity_object.start == null) {
            activity_object.start = datetime;
            activity_object.last_end = datetime;
            activity_object.total_num_steps += activity.steps;
        }
    });
    // Push the final object
    if (activity_object.start != null) {
        whole_activity_object.all.push(activity_object);
    }
    return whole_activity_object;
};

const LiveFeed = () => {
    const [activityData, setActivityData] = useState({
        walking: {
            all: [],
        },
        running: {
            all: [],
        },
        cycling: {
            all: [],
        },
    });
    const [apiRead, setApiRead] = useState(false);
    const [loadingData, setLoadingData] = useState();
    const [apiError, setApiError] = useState();
    // Activity state
    const [isIdle, setIsIdle] = useState(false);
    const [isWalking, setIsWalking] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [isCycling, setIsCycling] = useState(false);
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
            console.log(json);
            // Walking
            let walking_object;
            let walking = [];
            if (json.walking) {
                walking_object = handleActivityData(json.walking);
                walking = json.walking;
            } else {
                walking_object = createEmptyActivityObject();
            }
            // Running
            let running_object;
            let running = [];
            if (json.running) {
                running_object = handleActivityData(json.running);
                running = json.running;
            } else {
                running_object = createEmptyActivityObject();
            }
            // Cycling
            let cycling_object;
            let cycling = [];
            if (json.cycling) {
                cycling_object = handleActivityData(json.cycling);
                cycling = json.cycling;
            } else {
                cycling_object = createEmptyActivityObject();
            }
            /* Chart */
            createStepChart(walking, running, cycling);
            /* Activity data */
            setActivityData({
                walking: walking_object,
                running: running_object,
                cycling: cycling_object,
            });
            /* Latest activity */
            let latest_activity = findLatestActivity(
                walking_object,
                running_object,
                cycling_object
            );
            if (latest_activity == 0) {
                setIsIdle(true);
                setIsWalking(false);
                setIsRunning(false);
                setIsCycling(false);
            } else if (latest_activity == 1) {
                setIsIdle(false);
                setIsWalking(true);
                setIsRunning(false);
                setIsCycling(false);
            } else if (latest_activity == 2) {
                setIsIdle(false);
                setIsWalking(false);
                setIsRunning(true);
                setIsCycling(false);
            } else if (latest_activity == 3) {
                setIsIdle(false);
                setIsWalking(false);
                setIsRunning(false);
                setIsCycling(true);
            }
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
        }, 60_000);
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
                            Live Feed
                        </h1>
                        <h2 className="text-gray-600 ml-0.5">
                            Automatically refreshes every 60 seconds.
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
                <h1 className="text-xl font-semibold mb-2">Current activity</h1>
                <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div
                        className={`flex items-center p-8 bg-white shadow rounded-lg ${
                            isIdle ? "border-4 border-red-500" : ""
                        }`}
                    >
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                            <TbSofa size="2rem" />
                        </div>
                        <div>
                            <span
                                className={`block text-2xl ${
                                    isIdle ? "font-bold" : ""
                                }`}
                            >
                                Idle
                            </span>
                        </div>
                    </div>
                    <div
                        className={`flex items-center p-8 bg-white shadow rounded-lg ${
                            isWalking ? "border-4 border-red-500" : ""
                        }`}
                    >
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                            <RiFootprintLine size="2rem" />
                        </div>
                        <div>
                            <span
                                className={`block text-2xl ${
                                    isWalking ? "font-bold" : ""
                                }`}
                            >
                                Walking
                            </span>
                        </div>
                    </div>
                    <div
                        className={`flex items-center p-8 bg-white shadow rounded-lg ${
                            isRunning ? "border-4 border-red-500" : ""
                        }`}
                    >
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                            <FaRunning size="2rem" />
                        </div>
                        <div>
                            <span
                                className={`block text-2xl ${
                                    isRunning ? "font-bold" : ""
                                }`}
                            >
                                Running
                            </span>
                        </div>
                    </div>
                    <div
                        className={`flex items-center p-8 bg-white shadow rounded-lg ${
                            isCycling ? "border-4 border-red-500" : ""
                        }`}
                    >
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                            <IoBicycle size="2rem" />
                        </div>
                        <div>
                            <span
                                className={`block text-2xl ${
                                    isCycling ? "font-bold" : ""
                                }`}
                            >
                                Cycling
                            </span>
                        </div>
                    </div>
                </section>
                <section className="grid md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 xl:grid-flow-col gap-6">
                    <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">
                            Step chart (last 5 minutes)
                        </div>
                        <div className="p-4 flex-grow">
                            <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-white border-2 border-gray-200 border-dashed rounded-md">
                                <span
                                    style={{
                                        display: !apiRead ? "block" : "none",
                                    }}
                                >
                                    Loading step chart...
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

export default LiveFeed;
