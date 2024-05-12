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

let RemoveQuantityFromStock = (produitId, produit) => {
    return Axios.put(`/stock/del/${produitId}`, produit,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let addQuantityToStock = (productId, produit) => {
    return Axios.put(`/stock/add/${productId}`, produit,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

let removeProductFromWarehouse = (produitId) => {
    return Axios.delete(`/stock/${produitId}`)
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