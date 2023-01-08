import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/shared/PrimaryButton";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="add-service">
      <div className="card bg-[#E5E5E5] ">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Add Service</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Service Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="input input-bordered w-full max-w-xs"
                  {...register("title")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  {...register("image")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered mb-5 p-5 w-full"
                  placeholder="Enter Designation"
                  {...register("description")}
                ></textarea>
              </div>
            </div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
