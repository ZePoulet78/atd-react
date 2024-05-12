
import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import { entrepotsService } from '@/_service/entrepot.service';
import { useParams, useNavigate } from 'react-router-dom';
import { StockService } from '@/_service/stock.service';

const ProduitAdd = () => {
    const [produit, setProduit] = useState([])
    let navigate = useNavigate()

    console.log(produit)
    const onChange = (e) => {
        setProduit({
            ...produit,
            [e.target.name]: e.target.value
        })
        console.log(produit)
    }

    const { id } = useParams()

    const onSubmit = (e) => {
        e.preventDefault()

        StockService.addProductToWarehouse(id, produit)
            .then(res => navigate('../index'))
            .catch(err => console.log(err))
    }

    return (
        <div className="Ajouter un Produit">
            Produit Add
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="quantity">quantity</label>
                    <input type="number" name="quantity" onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="expiration_date">expiration_date</label>
                    <input type="date" name="expiration_date" onChange={onChange} />

                </div>
                <div className="group">
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
};

export default ProduitAdd;
