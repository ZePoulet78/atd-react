import React from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '@/_utils/Error';

import Pending from './Pending/Pending';
import Upload from './Pending/Upload';
import VLayout from './VLayout';
import UserProfile from './Volunteer/UserProfile';


const ProfileRouter = () => {
    return (
        <Routes>
            <Route path='/volunteer' element={<VLayout/>}>
                <Route path='user' element={<UserProfile/>}/>
            </Route>
            <Route path="beneficiary"element={<BLayout/>}/>
            <Route path='pending' element={<Pending/>} />
            <Route path='pending/upload' element={<Upload/>} />
        </Routes>
    )
}

export default ProfileRouter;