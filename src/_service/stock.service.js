import Axios from './caller.service';

let getAllProduit = () => {
    return Axios.get('/stock/false');
}

let getProduitById = (id) => {
    return Axios.get('/stock/'+id);

}

let getProduitByWarehouseId = (warehouseId) => {
    return Axios.get(`/stock/warehouse/${warehouseId}`);
}

let RemoveQuantityFromStock = (produit) => {
    return Axios.patch('/stock/del/'+ produit.id, produit,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let addQuantityToStock = (produit) => {
    return Axios.patch('/stock/add/'+ produit.id, produit,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let removeProductFromWarehouse = (id) => {
    return Axios.delete('/stock/'+id)
}

let addProductToWarehouse = (warehouseId, produit) => {
    return Axios.post(`/stock/post/${warehouseId}`, produit,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}


export const StockService = {
    getAllProduit,
    getProduitById,
    getProduitByWarehouseId,
    RemoveQuantityFromStock,
    addQuantityToStock,
    removeProductFromWarehouse,
    addProductToWarehouse,

}