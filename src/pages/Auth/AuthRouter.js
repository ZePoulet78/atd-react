import React from 'react';
import Login from '@/pages/Auth/Login';
import {Routes, Route} from 'react-router-dom';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/auth" element={<Login />} />
        </Routes>
    );
};
export default AuthRouter;