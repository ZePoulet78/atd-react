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
import RemoveQuantityProduct from './Entrepot/RemoveQuantityToProduct';
import RemoveProduct from './Entrepot/RemoveProduct';
import Demand from '@/pages/Admin/Demand/Demand.js';

import Collect from '@/pages/Admin/Collect/Collect.js';
import CollectAdd from '@/pages/Admin/Collect/CollectAdd.js';
import CollectEdit from '@/pages/Admin/Collect/CollectEdit.js';
import RoadMap from '@/pages/Admin/Collect/RoadMap.js';
import ViewDocument from '@/pages/Admin/Demand/ViewDocument.js';
import RoadMapM from './Maraude/RoadMapM';
import MaraudeEnt from './Maraude/MaraudeEnt';
import MaraudeEntProd from './Maraude/MaraudeEntProd';
import ViewMaraudProducts from './Maraude/ViewMaraudProducts';
import MaraudeAddProd from './Maraude/MaraudeAddProd';
import MaraudeRemoveProd from './Maraude/MaraudeRemoveProd';


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
                    <Route path="prod/remove-quantity/:productId" element={<RemoveQuantityProduct />} />
                    <Route path="prod/remove/:productId" element={<RemoveProduct />} />
                </Route>

                <Route path="maraude">
                    <Route path="index" element={<Maraude/>}/>
                    <Route path="add" element={<MaraudeAdd/>}/>
                    <Route path="edit/:id" element={<MaraudeEdit/>}/>
                    <Route path="road/:id" element={<RoadMapM/>}/>

                    {/*Partie entrepot maraude produits pcq je galere pitié*/}
                    <Route path=":maraudeId/produits" element={<ViewMaraudProducts/>}/>
                    <Route path=":maraudeId/entrepots" element={<MaraudeEnt/>}/>
                    <Route path=":maraudeId/entrepots/:warehouseId/produits" element={<MaraudeEntProd/>}/>*

                    <Route path=":maraudeId/produit/:productId/add" element={<MaraudeAddProd/>}/>
                    <Route path=":maraudeId/produit/:productId/remove" element={<MaraudeRemoveProd/>}/>
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

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Error from '@/_utils/Error';
// import { ALayout } from '@/pages/Admin';

// import User from '@/pages/Admin/User/User.js';
// import UserEdit from '@/pages/Admin/User/UserEdit.js';
// import UserAdd from '@/pages/Admin/User/UserAdd.js';
// import Activity from '@/pages/Admin/Activity/Activity.js';
// import ActivityAdd from '@/pages/Admin/Activity/ActivityAdd.js';
// import ActivityEdit from '@/pages/Admin/Activity/ActivityEdit.js';
// import Formation from '@/pages/Admin/Formation/Formation.js';
// import FormationAdd from '@/pages/Admin/Formation/FormationAdd.js';
// import FormationEdit from '@/pages/Admin/Formation/FormationEdit.js';
// import Maraude from '@/pages/Admin/Maraude/Maraude.js';
// import MaraudeAdd from '@/pages/Admin/Maraude/MaraudeAdd.js';
// import MaraudeEdit from '@/pages/Admin/Maraude/MaraudeEdit.js';
// import Role from '@/pages/Admin/Roles/Role.js';
// import RoleAdd from '@/pages/Admin/Roles/RoleAdd.js';
// import RoleEdit from '@/pages/Admin/Roles/RoleEdit.js';
// import Vehicle from '@/pages/Admin/Vehicle/Vehicle.js';
// import VehicleAdd from '@/pages/Admin/Vehicle/VehicleAdd';
// import VehicleEdit from '@/pages/Admin/Vehicle/VehicleEdit';

// import Entrepot from '@/pages/Admin/Entrepot/Entrepot.js';
// import EntrepotAdd from '@/pages/Admin/Entrepot/EntrepotAdd.js';
// import EntrepotEdit from '@/pages/Admin/Entrepot/EntrepotEdit.js';
// import ProduitAdd from '@/pages/Admin/Entrepot/ProduitAdd';
// import ProduitsByWarehouse from '@/pages/Admin/Entrepot/ProduitByWarehouse';
// import AddQuantityToProduct from '@/pages/Admin/Entrepot/AddQuantityToProduct';
// import RemoveQuantityProduct from '@/pages/Admin/Entrepot/RemoveQuantityProduct';
// import RemoveProduct from '@/pages/Admin/Entrepot/RemoveProduct';
// import Demand from '@/pages/Admin/Demand/Demand.js';

// import Collect from '@/pages/Admin/Collect/Collect.js';
// import CollectAdd from '@/pages/Admin/Collect/CollectAdd.js';
// import CollectEdit from '@/pages/Admin/Collect/CollectEdit.js';
// import RoadMap from '@/pages/Admin/Collect/RoadMap.js';
// import ViewDocument from '@/pages/Admin/Demand/ViewDocument.js';

// import AdminRoute from '@/routes/AdminRoute';

// const AdminRouter = () => {
//     return (
//         <Routes>
//             <Route element={<ALayout />}>
//                 <Route path="/" element={<AdminRoute component={User} />} />

//                 <Route path="user" element={<AdminRoute component={User} />} />
//                 <Route path="user/index" element={<AdminRoute component={User} />} />
//                 <Route path="user/edit/:id" element={<AdminRoute component={UserEdit} />} />
//                 <Route path="user/add" element={<AdminRoute component={UserAdd} />} />

//                 <Route path="activity/index" element={<AdminRoute component={Activity} />} />
//                 <Route path="activity/edit/:id" element={<AdminRoute component={ActivityEdit} />} />
//                 <Route path="activity/add" element={<AdminRoute component={ActivityAdd} />} />

//                 <Route path="formation/index" element={<AdminRoute component={Formation} />} />
//                 <Route path="formation/edit/:id" element={<AdminRoute component={FormationEdit} />} />
//                 <Route path="formation/add" element={<AdminRoute component={FormationAdd} />} />

//                 <Route path="entrepot/index" element={<AdminRoute component={Entrepot} />} />
//                 <Route path="entrepot/edit/:id" element={<AdminRoute component={EntrepotEdit} />} />
//                 <Route path="entrepot/add" element={<AdminRoute component={EntrepotAdd} />} />
//                 <Route path="entrepot/prod/add/:id" element={<AdminRoute component={ProduitAdd} />} />
//                 <Route path="entrepot/prod/show/:warehouseId" element={<AdminRoute component={ProduitsByWarehouse} />} />
//                 <Route path="entrepot/prod/add-quantity/:productId" element={<AdminRoute component={AddQuantityToProduct} />} />
//                 <Route path="entrepot/prod/remove-quantity/:productId" element={<AdminRoute component={RemoveQuantityProduct} />} />
//                 <Route path="entrepot/prod/remove/:productId" element={<AdminRoute component={RemoveProduct} />} />

//                 <Route path="maraude/index" element={<AdminRoute component={Maraude} />} />
//                 <Route path="maraude/edit/:id" element={<AdminRoute component={MaraudeEdit} />} />
//                 <Route path="maraude/add" element={<AdminRoute component={MaraudeAdd} />} />

//                 <Route path="roles/index" element={<AdminRoute component={Role} />} />
//                 <Route path="roles/edit/:id" element={<AdminRoute component={RoleEdit} />} />
//                 <Route path="roles/add" element={<AdminRoute component={RoleAdd} />} />

//                 <Route path="demand/index" element={<AdminRoute component={Demand} />} />
//                 <Route path="demand/documents/:id" element={<AdminRoute component={ViewDocument} />} />

//                 <Route path="vehicle/index" element={<AdminRoute component={Vehicle} />} />
//                 <Route path="vehicle/edit/:id" element={<AdminRoute component={VehicleEdit} />} />
//                 <Route path="vehicle/add" element={<AdminRoute component={VehicleAdd} />} />

//                 <Route path="collects/index" element={<AdminRoute component={Collect} />} />
//                 <Route path="collects/edit/:id" element={<AdminRoute component={CollectEdit} />} />
//                 <Route path="collects/add" element={<AdminRoute component={CollectAdd} />} />
//                 <Route path="collects/road/:id" element={<AdminRoute component={RoadMap} />} />

//                 <Route path="*" element={<Error />} />
//             </Route>
//         </Routes>
//     );
// };

// export default AdminRouter;
