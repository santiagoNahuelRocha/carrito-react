import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { TYPES } from "../reducers/Actions";
import { CartInicialState, CartReducer } from "../reducers/Reducer";
import Card from "./views/Card";
import ItemCart from "./views/ItemCart"; 

const Products = () => {
  const [state, dispatch] = useReducer(CartReducer, CartInicialState);
  const updateState = async () => {
    const productsURL = "http://localhost:3004/products"
    const cartURL = "http://localhost:3004/cart"
    
    const productList = await axios.get(productsURL);
    const cartList = await axios.get(cartURL);
    const newProducts = productList.data
    const newCart = cartList.data
    dispatch({type: TYPES.READ_STATE, payload: [newProducts, newCart]})
  };

  useEffect(() => {
    updateState();
  },[]);
  const { products, cart } = state;
  console.log(cart)

  const addProduct = (id) => {
    dispatch({ type: TYPES.ADD_PRODUCT, payload: id });
  };
  const deleteProduct = (id,delete_all) => {
    // alert(id)
    if(delete_all){
      dispatch({type: TYPES.DELETE_ALL_PRODUCT, payload: id})
    }else{
      dispatch({type: TYPES.DELETE_PRODUCT, payload: id})
    }
  };
  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  };
  return (
    <div className="container-fluid products">
      <h1>nuestros productos</h1>
      <div className="container">
        <div className="row ">
          {products.map((product) => {
            return (
              <div className="col-3 mb-3">
                {" "}
                <Card
                  key={product.id}
                  data={product}
                  addProduct={addProduct}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
      <h2>carrito</h2>
      <button onClick={clearCart} className="btn btn-warning">limpiar</button>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return <ItemCart key={index} data={item} deleteProduct={deleteProduct}  />;
          })}
        </tbody>
      </table>
      
    </div>
  );
};

export default Products;
