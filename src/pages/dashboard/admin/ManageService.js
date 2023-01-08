import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import servicesApi from "../../../api/servicesApi";
import PrimaryButton from "../../../components/shared/PrimaryButton";

const ManageService = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // all service api
    servicesApi.get("service").then((res) => setServices(res.data));
  }, [services]);

  // update service route

  const updateHandle = (id) => {
    navigate(`serviceUpdate/${id}`);
  };

  // delet service api

  const deleteHandle = (id) => {
    servicesApi.delete(`deleted-service/${id}`).then((res) => {
      toast.success("Service Update");
    });
  };
  return (
    <div className="w-full">
      <h1 className="text-center font-bold uppercase">Manages All Services</h1>
      <div className="p-20 w-full">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>{service.title}</td>
                <td>{service.price}</td>
                <td onClick={() => updateHandle(service._id)}>
                  <PrimaryButton>Update</PrimaryButton>
                </td>
                <td>
                  <button
                    onClick={() => deleteHandle(service._id)}
                    className="btn capitalize"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
