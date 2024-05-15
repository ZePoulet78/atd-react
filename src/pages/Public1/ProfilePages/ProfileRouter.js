import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '@/_utils/Error';

import Pending from './Pending/Pending';
import Upload from './Pending/Upload';
import VLayout from './VLayout';
import BLayout from './BLayout';
import UserProfile from './Volunteer/UserProfile';
import IndexActivities from './Volunteer/IndexActivities';
import UsersActivities from './Volunteer/UsersActivities';
import PendingProvider from '@/_helpers/PendingProvider';
import VCalendar from './Volunteer/VCalendar';

const ProfileRouter = () => {
    return (
        <Routes>
            <Route path='/volunteer' element={<VLayout />}>
                <Route path='user' element={<UserProfile />} />
                <Route path='activities' element={<IndexActivities/>} />
                <Route path='activities/participating' element={<UsersActivities />} />
                <Route path='calendar' element={<VCalendar />} />
            </Route>
            <Route path='beneficiary' element={<BLayout />} />
            <Route
                path='pending'
                element={
                    <PendingProvider>
                        <Pending />
                    </PendingProvider>
                }
            />
            <Route
                path='pending/upload'
                element={
                    <PendingProvider>
                        <Upload />
                    </PendingProvider>
                }
            />
        </Routes>
    );
}

export default ProfileRouter;
