import React from 'react';
import { Routes, Route } from "react-router-dom";
import Error from '@/_utils/Error';

import { ALayout} from '@/pages/Admin';
import  User  from '@/pages/Admin/User/User.js';
import  UserEdit  from '@/pages/Admin/User/UserEdit.js';
import  UserAdd  from '@/pages/Admin/User/UserAdd.js';
import  Activity  from '@/pages/Admin/Activity/Activity.js';
import  ActivityAdd  from '@/pages/Admin/Activity/ActivityAdd.js';
import  ActivityEdit  from '@/pages/Admin/Activity/ActivityEdit.js';
import Formation from '@/pages/Admin/Formation/Formation.js';
import FormationAdd from '@/pages/Admin/Formation/FormationAdd.js';
import FormationEdit from '@/pages/Admin/Formation/FormationEdit.js';
import Stock from '@/pages/Admin/Stock/Stock.js';
import StockAdd from '@/pages/Admin/Stock/StockAdd.js';
import StockEdit from '@/pages/Admin/Stock/StockEdit.js';
import Maraude from '@/pages/Admin/Maraude/Maraude.js';
import MaraudeAdd from '@/pages/Admin/Maraude/MaraudeAdd.js';
import MaraudeEdit from '@/pages/Admin/Maraude/MaraudeEdit.js';
import Role from '@/pages/Admin/Roles/Role.js';
import RoleAdd from '@/pages/Admin/Roles/RoleAdd.js';
import RoleEdit from '@/pages/Admin/Roles/RoleEdit.js';
import Vehicle from '@/pages/Admin/Vehicle/Vehicle.js';
import VehicleAdd from '@/pages/Admin/Vehicle/VehicleAdd';
// import VehicleEdit from '@/pages/Admin/Vehicle/VehicleEdit';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<User/>}/>

                <Route path="user" element={<User/>}/>
                <Route path="activity" element={<Activity/>}/>

                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:id" element={<UserEdit/>}/>
                    <Route path="add" element={<UserAdd/>}/>
                </Route>

                <Route path="activity">
                    <Route path="index" element={<Activity/>}/>
                    <Route path="edit/:id" element={<ActivityEdit/>}/>
                    <Route path="add" element={<ActivityAdd/>}/>

                </Route>

                <Route path="formation">
                    <Route path="index" element={<Formation/>}/>
                    <Route path="edit/:id" element={<FormationEdit/>}/>
                    <Route path="add" element={<FormationAdd/>}/>

                </Route>

                <Route path="stock">
                    <Route path="index" element={<Stock/>}/>
                    <Route path="edit/:id" element={<StockEdit/>}/>
                    <Route path="add" element={<StockAdd/>}/>

                </Route>

                <Route path="maraude">
                    <Route path="index" element={<Maraude/>}/>
                    <Route path="edit/:id" element={<MaraudeEdit/>}/>
                    <Route path="add" element={<MaraudeAdd/>}/>

                </Route>

                <Route path='roles'>
                    <Route path='index' element={<Role/>}/>
                    <Route path='edit/:id' element={<RoleEdit/>}/>
                    <Route path='add' element={<RoleAdd/>}/>
                </Route>

                <Route path="vehicle">
                    <Route path="index" element={<Vehicle/>}/>
                    {/* <Route path="edit/:id" element={<VehicleEdit/>}/> */}
                    <Route path="add" element={<VehicleAdd/>}/>
                </Route>

                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;