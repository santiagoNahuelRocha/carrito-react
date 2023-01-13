import React from "react";

const ItemCart = ({ data, deleteProduct }) => {
  const { id, price, name, image, count } = data;
  return (
    // <div className='card'>
    //     <div className='card-img'>
    //         <img src={image} alt="" />
    //     </div>
    //     <div className='card-body'>
    //     <h4>{name}</h4>
    //     <h5>${price} x {count} = $ {price * count}</h5>
    //     <button>eliminar uno</button>
    //     <button>eliminar todo</button>
    //     </div>

    // </div>
    <tr class="table-light">
      <th scope="row"> <img src={image} alt="" /></th>
      <td>{name}</td>
      <td>${price}</td>
      <td>{count}</td>
      <td>${price * count}</td>
      <td><button className="col-6 btn btn-warning" onClick={() => deleteProduct(id, false)}>uno</button><button className="col-6 btn btn-danger" onClick={() => deleteProduct(id, true)}>todo</button></td>
    </tr>
  );
};

export default ItemCart;
