import React from "react";
import { Outlet } from 'react-router-dom';
import ProfileSideNav from '@/components/ProfileSideNav.js'
import PublicHeader from '@/components/Public/PublicHeader';


const VLayout = () => {
    return (
        <>
        <div className="VLayout flex h-screen">
                <div className="bg-white shadow-md">
                    <ProfileSideNav/>
                </div>
                <div id="admin_body" className="w-75">
                    <Outlet/>
                </div>
        </div>
        </>
    );
};

export default VLayout;