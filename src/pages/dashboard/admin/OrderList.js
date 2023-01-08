import React, { useEffect, useState } from "react";
import servicesApi from "../../../api/servicesApi";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // all service api
    servicesApi.get("order").then((res) => setOrders(res.data));
  }, [orders]);
  const updateOrderHandle = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="w-full">
      <h1 className="text-center font-bold uppercase">Manages All orders</h1>
      <div className="p-20 w-full">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Pay With</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.service}</td>
                <td>{order.pay}</td>
                <select
                  onClick={(e) => updateOrderHandle(e)}
                  className="select select-ghost"
                >
                  <option value="pending" className="text-primary">
                    Pending
                  </option>
                  <option value="done" className="text-[#009444]">
                    Done
                  </option>
                  <option value="going" className="text-[#FFBD3E]">
                    On going
                  </option>
                </select>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
