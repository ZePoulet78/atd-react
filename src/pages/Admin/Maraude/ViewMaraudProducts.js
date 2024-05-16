// // show maraudes products
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { StockService } from '@/_service/stock.service';
// import { Link } from 'react-router-dom';

// const ViewMaraudProducts = () => {
//     const [produits, setProduits] = useState([]);
//     const [error, setError] = useState('');
//     const { maraudeId } = useParams();
    
//     useEffect(() => {
//         fetchProduits();
//         console.log();
//     }, [maraudeId]);
    
//     const fetchProduits = () => {
//         StockService.getProduitByMaraudeId(maraudeId)
//         .then(response => {
//             setProduits(response.data.prod);
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.error(err);
//             setError(err.message || 'Une erreur s\'est produite');
//         });
//     };
    
//     if (error) {
//         return <div>Erreur : {error}</div>;
//     }
    
//     return (
//         <div>
//         <h2>Produits dans la maraude {maraudeId}</h2>
//         <table>
//             <thead>
//             <tr>
//                 <th>Nom</th>
//                 <th>Quantité</th>
//                 <th>Date d'expiration</th>
//             </tr>
//             </thead>
//             <tbody>
//             {produits.map(produit => (
//                 <tr key={produit.id}>
//                 <td>{produit.name}</td>
//                 <td>{produit.quantity}</td>
//                 <td>{produit.expiration_date}</td>
//                 <Link to={`/admin/maraude/${maraudeId}/prod/add-quantity/${produit.id}`}>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                     +
//                     </button>
//                 </Link>
//                 <Link to={`/admin/maraude/${maraudeId}/prod/remove-quantity/${produit.id}`}>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                     -
//                     </button>
//                 </Link>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//         </div>
//     );
// };

// export default ViewMaraudProducts;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StockService } from '@/_service/stock.service';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewMaraudProducts = () => {
    const [produits, setProduits] = useState([]);
    const [error, setError] = useState('');
    const { maraudeId } = useParams();
    
    useEffect(() => {
        fetchProduits();
    }, [maraudeId]);
    
    const fetchProduits = () => {
        StockService.getProduitByMaraudeId(maraudeId)
        .then(response => {
            setProduits(response.data);
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
            setError(err.message || 'Une erreur s\'est produite');
        });
    };
    
    if (error) {
        return <div className="alert alert-danger">Erreur : {error}</div>;
    }
    
    return (
        <div className="container mt-4">
            <h2>Produits dans la maraude {maraudeId}</h2>
            {produits === 0 ? (
                <div className="">Aucun Produit</div>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Quantité</th>
                            <th>Date d'expiration</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produits && produits.map(produit => (
                            <tr key={produit.id}>
                                <td>{produit.name}</td>
                                <td>{produit.quantity}</td>
                                <td>{produit.expiration_date}</td>
                                <td>
                                    <Link to={`/admin/maraude/${maraudeId}/produit/${produit.id}/add`}>
                                        <button className="btn btn-primary mr-2">
                                            +
                                        </button>
                                    </Link>
                                    <Link to={`/admin/maraude/${maraudeId}/produit/${produit.id}/remove`}>
                                        <button className="btn btn-danger">
                                            -
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/**Ajouter produits */}
                    <Link to={`/admin/maraude/${maraudeId}/entrepots`}>
                        <button className="btn btn-primary mt-4">Ajouter Produit</button>
                    </Link>

                </table>
            )}
        </div>
    );
};

export default ViewMaraudProducts;
