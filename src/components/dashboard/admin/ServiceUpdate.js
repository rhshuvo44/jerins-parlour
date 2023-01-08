import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import servicesApi from "../../../api/servicesApi";
import PrimaryButton from "../../shared/PrimaryButton";

const ServiceUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    servicesApi.put(`update-service/${id}`, data).then((res) => {
      reset();
      toast.success("Service Update");
      navigate("/dashboard/manageService");
    });
  };
  return (
    <div className="add-service-section py-5">
      <div className="card bg-[#E5E5E5] ">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Update Service</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Service Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Update Title"
                  className="input input-bordered w-full max-w-xs"
                  {...register("title")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Update Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price")}
                />
              </div>

              <div className="form-control w-full mb-5 max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered p-5 w-full"
                  placeholder="Enter Update Designation"
                  {...register("description")}
                ></textarea>
              </div>
            </div>
            <PrimaryButton type="submit">Update</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceUpdate;
