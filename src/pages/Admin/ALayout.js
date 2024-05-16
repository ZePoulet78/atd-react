import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '@/components/SideNav.js'



const ALayout = () => {
    return (
        <div className="ALayout">
            <div id="admin" className="flex h-screen">
                <div className="bg-white shadow-md">
                    <SideNav/>
                </div>
                <div id="admin_body" className="w-75">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default ALayout;