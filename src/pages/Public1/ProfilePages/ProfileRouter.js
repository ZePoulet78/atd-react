import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '@/_utils/Error';

import Pending from './Pending/Pending';
import Upload from './Pending/Upload';
import VLayout from './VLayout';
import BLayout from './BLayout';
import UserProfile from './Volunteer/UserProfile';
import IndexActivitites from './Volunteer/IndexActivities';
import PendingProvider from '@/_helpers/PendingProvider';

const ProfileRouter = () => {
    return (
        <Routes>
            <Route
                path='/*'
                element={
                    <PendingProvider>
                        <Routes>
                            <Route path='volunteer' element={<VLayout />}>
                                <Route path='user' element={<UserProfile />} />
                                <Route path='activities' element={<IndexActivitites />} />
                            </Route>
                            <Route path='beneficiary' element={<BLayout />}/>
                        </Routes>
                    </PendingProvider>
                }
            />
            <Route path='pending' element={<Pending />} />
            <Route path='pending/upload' element={<Upload />} />
            <Route path='*' element={<Error />} />
        </Routes>
    );
};

export default ProfileRouter;