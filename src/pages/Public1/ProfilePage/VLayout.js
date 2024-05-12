import React from "react";
import { Outlet } from 'react-router-dom';
import ProfileSideNav from '@/components/ProfileSideNav.js'
import PublicHeader from '@/components/Public/PublicHeader';


const VLayout = () => {
    return (
        <div className="VLayout">
            <div id="admin" className="flex h-screen">
                <div className="bg-white shadow-md">
                    <ProfileSideNav/>
                </div>
                <div id="admin_body" className="flex-1 p-6">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default VLayout;