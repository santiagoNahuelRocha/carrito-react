import React from 'react';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Footer from './views/Footer';
import Home from './views/Home';
import NavBar from './views/NavBar';
import Products from "./Products"

const Rutas = () => {
    const hola = "asd"
    return (
       <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home /> } hola = {hola}></Route>
                <Route path='/Products' element={<Products /> }></Route>
                
            </Routes>
            <Footer />
       </Router>
    );
}

export default Rutas;
