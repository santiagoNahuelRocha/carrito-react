import React from 'react';

const Card = ({data, addProduct}) => {
    const {name, price, image} = data

    return (
     
            <div className="card">
                <div className='card-img'>
                    <img src={image} alt="" />
                </div>
                <div className="card-body">
                    <p>{name}</p>
                    <p>{price}</p>
                    <button className='btn btn-success w-100' onClick={ () => addProduct(data.id)}>agregar</button>
                </div>
            </div>
    );
}

export default Card;
