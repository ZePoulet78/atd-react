import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '@/_utils/Error';

import Pending from './Pending/Pending';
import Upload from './Pending/Upload';
import VLayout from './VLayout';
import BLayout from './BLayout';
import UserProfile from './Volunteer/UserProfile';
import IndexActivities from './Volunteer/IndexActivities';
import AddService from '@/pages/Public1/ProfilePages/Beneficiary/AddService';
import MyService from '@/pages/Public1/ProfilePages/Beneficiary/MyService';
import MyServiceEdit from '@/pages/Public1/ProfilePages/Beneficiary/MyServiceEdit';
import JoinService from '@/pages/Public1/ProfilePages/Volunteer/JoinService';
import JoinServiceShow from '@/pages/Public1/ProfilePages/Volunteer/JoinServiceShow';

import UsersActivities from './Volunteer/UsersActivities';
import PendingProvider from '@/_helpers/PendingProvider';
import VCalendar from './Volunteer/VCalendar';

const ProfileRouter = () => {
    return (
        <Routes>
            
           
            
            <Route path='/volunteer' element={<VLayout/>}>
                <Route path='user' element={<UserProfile/>}/>
                <Route path="activities" element={<IndexActivities />} />
                <Route path="join" element={<JoinService />} />
                <Route path="show" element={<JoinServiceShow />} />
                <Route path='activities/participating' element={<UsersActivities />} />
                <Route path='calendar' element={<VCalendar />} />

                
            </Route>


            <Route path='/beneficiary' element={<BLayout/>}>
                <Route path='pending' element={<Pending/>} />
                <Route path='pending/upload' element={<Upload/>} />
                <Route path='service' element={<AddService/>} />
                <Route path='/myservice'>
                    <Route path='index' element={<MyService/>} />
                    <Route path='edit/:id' element={<MyServiceEdit/>} />
                </Route>

            </Route>

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
            <Route path='*' element={<Error />} />
        </Routes>
    );
}

export default ProfileRouter;
