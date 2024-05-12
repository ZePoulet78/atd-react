import React from 'react';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import RegisterBenef from '@/pages/Auth/RegisterBenef';
import {Routes, Route} from 'react-router-dom';
import Error from '@/_utils/Error';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/joinus" element={<Register />} />
            <Route path='/needhelp' element={<RegisterBenef />} />
            <Route path='*' element={<Error />} />
        </Routes>
    );
};
export default AuthRouter;