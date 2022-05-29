import React from 'react';
import { toast } from 'react-toastify';

const Productsrow = ({product}) => {
    const handleDelete = (_id) => {
        fetch(`https://stormy-crag-70028.herokuapp.com/product/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.error(" Product Deleted");
          });
      };
    return (
        <tr>
             
                   
        <td>{product?.name}</td>
        <td>{product?.ava}</td>
        <td> <button onClick={()=>handleDelete(product?._id)}  className="btn btn-xs btn-warning">Remove</button></td>
      </tr>
    


    );
};

export default Productsrow;