/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const NavItem = ({sidebarStatus, menuTitle, subMenu, subMenuArray, hrefLink, children}) => {
    const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);
    const subMenuToggle = ()=>{
        setSubMenuToggleStatus(!subMenuToggleStatus)
      }

    useEffect(()=>{
        if(!sidebarStatus){
            setSubMenuToggleStatus(false)
        }
    },[sidebarStatus])
    //console.log('submenu', sidebarStatus)
    return (
        <>
            <Link href={hrefLink}>
               <span  className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group" onClick={subMenuToggle}>
                    {children}
                     <span className={`${sidebarStatus ? 'text-base ml-2' : 'sr-only'}`}>{menuTitle}</span>
                     <span className={`${sidebarStatus ? 'hidden' : 'hidden group-hover:block'} absolute -left-4 -bottom-5 bg-slate-500 text-white p-1 text-xs w-[88px] text-center`}>{menuTitle}</span>
                </span>
            </Link>
        </>
    );
};

export default NavItem;