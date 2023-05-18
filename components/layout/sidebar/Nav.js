import { BsCameraReelsFill } from "react-icons/bs";
import { RiFootprintLine } from "react-icons/ri";
import { FaRunning } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Nav = ({ sidebarOutsideClick }) => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);

    const sidebarClose = () => {
        setSidebarStatus(false);
    };

    const sidebarOpen = () => {
        setSidebarStatus(true);
    };

    const subMenuToggle = () => {
        setSubMenuToggleStatus(!subMenuToggleStatus);
    };

    //if menu has chile menu then  use seperate array
    const childMenu = [
        {
            subMenuTitle: "child One",
            linkHref: "/",
        },
        {
            subMenuTitle: "child Two",
            linkHref: "/",
        },
        {
            subMenuTitle: "child Three",
            linkHref: "/",
        },
    ];

    useEffect(() => {
        if (sidebarOutsideClick) {
            setSidebarStatus(false);
        }
    }, [sidebarOutsideClick]);
    //console.log("sidebar Nav", sidebarOutsideClick)
    return (
        <>
            <nav className="flex flex-col mx-4 my-6 space-y-4">
                <NavItem
                    hrefLink="/live"
                    sidebarStatus={sidebarStatus}
                    menuTitle="Live Feed"
                    subMenu={false}
                    subMenuArray={null}
                >
                    <BsCameraReelsFill size="2rem" />
                </NavItem>

                <NavItem
                    hrefLink="/walking"
                    sidebarStatus={sidebarStatus}
                    menuTitle="Walking"
                    subMenu={false}
                    subMenuArray={null}
                >
                    <RiFootprintLine size="2rem" />
                </NavItem>

                <NavItem
                    hrefLink="/running"
                    sidebarStatus={sidebarStatus}
                    menuTitle="Running"
                    subMenu={false}
                    subMenuArray={null}
                >
                    <FaRunning size="2rem" />
                </NavItem>

                <NavItem
                    hrefLink="/cycling"
                    sidebarStatus={sidebarStatus}
                    menuTitle="Cycling"
                    subMenu={false}
                    subMenuArray={null}
                >
                    <IoBicycle size="2rem" />
                </NavItem>

                <NavItem
                    hrefLink="/report"
                    sidebarStatus={sidebarStatus}
                    menuTitle="Report"
                    subMenu={false}
                    subMenuArray={null}
                >
                    <HiOutlineDocumentReport size="2rem" />
                </NavItem>
            </nav>
        </>
    );
};

export default Nav;
