import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { TYPES } from "../../reducers/Actions";
import { CartInicialState, CartReducer } from "../../reducers/Reducer";
import Card from "./Card";

const Home = () => {
  const [state, dispatch] = useReducer(CartReducer, CartInicialState);
  const updateState = async () => {
    const productsURL = "http://localhost:3004/products"
    
    const productList = await axios.get(productsURL);
    const newProducts = productList.data

    dispatch({type: TYPES.READ_STATE, payload: [newProducts]})
  };

  useEffect(() => {
    updateState();
  },[]);
  const { products } = state;
  console.log(products)
  return (
    <>
    <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://imagenes.compragamer.com/bannerPrincipal/DC_20221104105427_pTu1uEmz.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://imagenes.compragamer.com/bannerPrincipal/DC_20221222142710_QhpIKJ3S.jpg"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://imagenes.compragamer.com/bannerPrincipal/DC_20221104134733_3AWpvspP.jpg"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid mt-5">
      <div className="row ">
          {products.map((product) => {
            return (
              <div className="col-3 mb-3">
                {" "}
                <Card
                  key={product.id}
                  data={product}
                  
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
      
  );
};

export default Home;
