
"use client";
import { useState } from "react";
import SideMenu from "./SideMenu";
import MobileMenu from "./MobileMenu";

const MemoNavigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <SideMenu />
            <MobileMenu
                showMobileMenu={showMobileMenu}
                setShowMobileMenu={setShowMobileMenu}
            />
        </>
    );
};

export default MemoNavigation;