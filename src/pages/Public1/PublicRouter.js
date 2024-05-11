import React from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '@/_utils/Error';
import Home from './Home';

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
}

export default PublicRouter;