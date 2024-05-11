import React from 'react';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import {Routes, Route} from 'react-router-dom';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/joinus" element={<Register />} />
        </Routes>
    );
};
export default AuthRouter;