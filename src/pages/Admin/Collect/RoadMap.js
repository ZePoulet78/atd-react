// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const RoadMap = () => {
//     const { id } = useParams();
//     const [addresses, setAddresses] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
        
//         const timer = setTimeout(() => {
//             if (searchTerm) {
//                 searchAddresses();
//             }
//         }, 300); 

//         return () => clearTimeout(timer); 
//     }, [searchTerm]);

//     const searchAddresses = async () => {
//         const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(searchTerm)}&type=housenumber&autocomplete=1`;
//         const response = await fetch(apiUrl);
//         console.log(response);
//         const data = await response.json();
//         setSearchResults(data.features);
//     };

//     const addAddressToList = (address) => {
//         setAddresses([...addresses, address]);
//         setSearchTerm(address.properties.label);
//         setSearchResults([]); 
//     };

//     const removeAddress = (addressId) => {
//         setAddresses(addresses.filter(address => address.properties.id!== addressId));
//     };

//     const submitAddresses = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/optimize-route', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ addresses, id })
//             });
//             const data = await response.json();
//             navigate(`/collect/${id}/route-plan`);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-md-8 offset-md-2">
//                     <h2 className="text-center mb-4">Planification de Route</h2>
//                     <div className="input-group mb-3">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Recherche d'adresses..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <button className="btn btn-outline-secondary" type="button" onClick={searchAddresses}>Rechercher</button>
//                     </div>
//                     <div className="list-group">
//                         {searchResults.map(address => (
//                             <div key={address.properties.id} className="list-group-item">
//                                 <div className="d-flex justify-content-between">
//                                     <div>
//                                         <strong>{address.properties.label}</strong><br />
//                                         {address.properties.address}
//                                     </div>
//                                     <button className="btn btn-primary" onClick={() => addAddressToList(address)}>Ajouter</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="list-group">
//                         {addresses.map(address => (
//                             <div key={address.properties.id} className="list-group-item">
//                                 <div className="d-flex justify-content-between">
//                                     <div>
//                                         <strong>{address.properties.label}</strong><br />
//                                         {address.properties.address}
//                                     </div>
//                                     <button className="btn btn-danger" onClick={() => removeAddress(address.properties.id)}>Supprimer</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <button className="btn btn-success mt-3" onClick={submitAddresses}>Post la liste d'adresses</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RoadMap;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const RoadMap = () => {
//     const { id } = useParams();
//     const [addresses, setAddresses] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (searchTerm.length >= 4) {
//             const timer = setTimeout(() => {
//                 searchAddresses();
//             }, 300); 

//             return () => clearTimeout(timer); 
//         }
//     }, [searchTerm]);

//     const searchAddresses = async () => {
//         const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(searchTerm)}&type=housenumber&autocomplete=1`;
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setSearchResults(data.features);
//     };

//     const addAddressToList = (address) => {
//         setAddresses([...addresses, address]);
//         setSearchTerm(address.properties.label); 
//         setSearchResults([]);   
//     };

//     const removeAddress = (addressId) => {
//         setAddresses(addresses.filter(address => address.properties.id!== addressId));
//     };

//     const submitAddresses = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/optimize-route', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ addresses, id })
//             });
//             const data = await response.json();
//             navigate(`/collect/${id}/route-plan`);
//         } catch (error) {
//             console.error(error);
//             console.log(addresses, id)
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-md-8 offset-md-2">
//                     <h2 className="text-center mb-4">Planification de Route</h2>
//                     <div className="input-group mb-3">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Recherche d'adresses..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <button className="btn btn-outline-secondary" type="button" onClick={searchAddresses}>Rechercher</button>
//                     </div>
//                     <div className="list-group">
//                         {searchResults.map(address => (
//                             <div key={address.properties.id} className="list-group-item">
//                                 <div className="d-flex justify-content-between">
//                                     <div>
//                                         <strong>{address.properties.label}</strong><br />
//                                         {address.properties.address}
//                                     </div>
//                                     <button className="btn btn-primary" onClick={() => addAddressToList(address)}>Ajouter</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <button className="btn btn-success mt-3" onClick={submitAddresses}>Générer le plan de route</button>
//                 </div>
//                 <div className="mt-3">
//                         <h5 className="mb-2">Adresses ajoutées :</h5>
//                         <div className="list-group">
//                             {addresses.map(address => (
//                                 <div key={address.properties.id} className="list-group-item">
//                                     <div className="d-flex justify-content-between">
//                                         <div>
//                                             <strong>{address.properties.label}</strong><br />
//                                             {address.properties.address}
//                                         </div>
//                                         <button className="btn btn-danger" onClick={() => removeAddress(address.properties.id)}>Supprimer</button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RoadMap;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collectService } from '../../../_service/collect.service';

const RoadMap = () => {
    const { id } = useParams();
    const [addresses, setAddresses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchTerm.length >= 4) {
            const timer = setTimeout(() => {
                searchAddresses();
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [searchTerm]);

    const searchAddresses = async () => {
        const apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(searchTerm)}&type=housenumber&autocomplete=1`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSearchResults(data.features);
    };

    const addAddressToList = (address) => {
        console.log(address);
        const addressLabel = address.properties.label;
        console.log(addressLabel);
        setAddresses([...addresses, addressLabel]);
        setSearchTerm(addressLabel);
        setSearchResults([]);
    };

    const removeAddress = (addressIndex) => {
        setAddresses(addresses.filter((_, index) => index!== addressIndex));
    };

    const submitAddresses = async () => {
        try {
            const response = await fetch('http://localhost:5000/optimize-route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ addresses:addresses, collect_id:id })
            });
            const data = await response.json();
            console.log(data.s3_route_html_url);
            collectService.addRoutePlan(data.s3_route_html_url, id)
                .then(res => navigate(`../index`))
                .catch(err => console.log(err))
        } catch (error) {
            console.error(error);
            console.log(addresses, id);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center mb-4">Planification de Route</h2>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Recherche d'adresses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary" type="button" onClick={searchAddresses}>Rechercher</button>
                    </div>
                    <div className="list-group">
                        {searchResults.map(address => (
                            <div key={address.properties.id} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <strong>{address.properties.label}</strong><br />
                                        {address.properties.address}
                                    </div>
                                    <button className="btn btn-primary" onClick={() => addAddressToList(address)}>Ajouter</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="list-group">
                    {addresses.map((addressLabel, index) => (
                        <div key={index} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>{addressLabel}</strong>
                                </div>
                                <button className="btn btn-danger" onClick={() => removeAddress(index)}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                    </div>
                    <button className="btn btn-success mt-3" onClick={submitAddresses}>Générer le plan de route</button>
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
