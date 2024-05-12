import React from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '@/_utils/Error';
import DonPage from '@/pages/Public1/DonPage.js';
import Home from './Home';

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/don" index element={<DonPage/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
}

export default PublicRouter;