import React from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '@/_utils/Error';
<<<<<<< HEAD
import DonPage from '@/pages/Public1/DonPage.js';
=======
import Home from './Home';
>>>>>>> 17370784580a1a69d27e28178baba4db1c5b2fca

const PublicRouter = () => {
    return (
        <Routes>
<<<<<<< HEAD

            <Route path="/don" index element={<DonPage/>}/>

=======
            <Route index element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
>>>>>>> 17370784580a1a69d27e28178baba4db1c5b2fca
        </Routes>
    );
}

export default PublicRouter;