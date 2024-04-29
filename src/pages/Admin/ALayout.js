import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '@/components/SideNav.js'
import PublicHeader from '@/components/Public/PublicHeader';



// import Header from '@/components/admin/Header'


const ALayout = () => {
    return (
        <div className="ALayout">
            {/* <PublicHeader/> */}
            <div id="admin" className="flex h-screen">
                <div className="bg-white shadow-md">
                    <SideNav/>
                </div>
                <div id="admin_body" className="flex-1 p-6">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default ALayout;