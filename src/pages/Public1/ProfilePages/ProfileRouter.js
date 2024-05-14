import React from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '@/_utils/Error';

import Pending from './Pending/Pending';
import Upload from './Pending/Upload';


const ProfileRouter = () => {
    return (
        <Routes>
            <Route path='pending' element={<Pending/>} />
            <Route path='pending/upload' element={<Upload/>} />
        </Routes>
    )
}

export default ProfileRouter;