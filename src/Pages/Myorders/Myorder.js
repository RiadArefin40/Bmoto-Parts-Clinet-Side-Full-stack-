import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Myorder = ({ order }) => {
  const handleDelete = (_id) => {
    fetch(`https://stormy-crag-70028.herokuapp.com/order/${_id}`, {
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
  const handlemodal = () => {};

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{order?.orderName}</div>
            </div>
          </div>
        </td>
        <td>{order.orderQuantity}</td>
        <td>{order.price}</td>
       
        <td>
          {(order.price && !order.paid )&& (
           <Link to={`/dashboard/payment/${order._id}`}> <button className="btn btn-xs btn-success">Pay Now</button></Link>
          )}
            {(order.price && order.paid )&& (
            <button disabled className="btn btn-xs btn-success ">Paid</button>
          )}
        </td>
        <td>
          <label
            onClick={handlemodal}
            htmlFor="my-modal"
            className="btn btn-xs btn-error"
          >
            Remove Item
          </label>
        </td>
      </tr>
      <input type="checkbox" id="my-modal" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-success  absolute left-5 bottom-5"
          >
            Cancel
          </label>
          <h3 className="font-bold text-3xl text-center">
            Are you confirm to remove item!
          </h3>

          <div className="modal-action">
            <label
              onClick={() => handleDelete(order?._id)}
              htmlFor="my-modal"
              className="btn btn-error   "
            >
              Confirm{" "}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorder;
