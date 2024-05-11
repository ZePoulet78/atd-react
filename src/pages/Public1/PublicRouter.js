import React from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '@/_utils/Error';
import DonPage from '@/pages/Public1/DonPage.js';

const PublicRouter = () => {
    return (
        <Routes>

            <Route path="/don" index element={<DonPage/>}/>

        </Routes>
    );
}

export default PublicRouter;