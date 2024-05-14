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
import Maraude from '@/pages/Admin/Maraude/Maraude.js';
import MaraudeAdd from '@/pages/Admin/Maraude/MaraudeAdd.js';
import MaraudeEdit from '@/pages/Admin/Maraude/MaraudeEdit.js';
import Role from '@/pages/Admin/Roles/Role.js';
import RoleAdd from '@/pages/Admin/Roles/RoleAdd.js';
import RoleEdit from '@/pages/Admin/Roles/RoleEdit.js';
import Vehicle from '@/pages/Admin/Vehicle/Vehicle.js';
import VehicleAdd from '@/pages/Admin/Vehicle/VehicleAdd';
import VehicleEdit from '@/pages/Admin/Vehicle/VehicleEdit';

import Entrepot from '@/pages/Admin/Entrepot/Entrepot.js';
import EntrepotAdd from '@/pages/Admin/Entrepot/EntrepotAdd.js';
import EntrepotEdit from '@/pages/Admin/Entrepot/EntrepotEdit.js';
import ProduitAdd from './Entrepot/ProduitAdd';
import ProduitsByWarehouse from './Entrepot/ProduitByWarehouse';
import AddQuantityToProduct from './Entrepot/AddQuantityToProduct';
import RemoveQuantityFromProduct from './Entrepot/RemoveQuantityToProduct';
import RemoveProduct from './Entrepot/RemoveProduct';
import Demand from '@/pages/Admin/Demand/Demand.js';

import Collect from '@/pages/Admin/Collect/Collect.js';
import CollectAdd from '@/pages/Admin/Collect/CollectAdd.js';
import CollectEdit from '@/pages/Admin/Collect/CollectEdit.js';
import RoadMap from '@/pages/Admin/Collect/RoadMap.js';
import ViewDocument from '@/pages/Admin/Demand/ViewDocument.js';



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

                <Route path="entrepot">
                    <Route path="index" element={<Entrepot/>}/>
                    <Route path="edit/:id" element={<EntrepotEdit/>}/>
                    <Route path="add" element={<EntrepotAdd/>}/>
                    <Route path="prod/add/:id" element={<ProduitAdd/>}/>
                    <Route path="prod/show/:warehouseId" element={<ProduitsByWarehouse/>}/>
                    <Route path="prod/add-quantity/:productId" element={<AddQuantityToProduct />} />
                    <Route path="prod/remove-quantity/:productId" element={<RemoveQuantityFromProduct />} />
                    <Route path="prod/remove/:productId" element={<RemoveProduct />} />
                </Route>

                {/* <Route path="stock">
                    <Route path="index" element={<Stock/>}/>
                    <Route path="edit/:id" element={<StockEdit/>}/>
                    <Route path="add" element={<StockAdd/>}/>

                </Route> */}

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

                <Route path="demand">
                    <Route path="index" element={<Demand/>}/>
                    <Route path="documents/:id" element={<ViewDocument/>}/>
                </Route>



                <Route path="vehicle">
                    <Route path="index" element={<Vehicle/>}/>
                    <Route path="edit/:id" element={<VehicleEdit/>}/>
                    <Route path="add" element={<VehicleAdd/>}/>
                </Route>

                <Route path='collects'>
                    <Route path='index' element={<Collect/>}/>
                    <Route path='edit/:id' element={<CollectEdit/>}/>
                    <Route path='add' element={<CollectAdd/>}/>
                    <Route path='road/:id' element={<RoadMap/>}/>
                </Route>


                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;