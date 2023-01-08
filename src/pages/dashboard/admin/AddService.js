import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import servicesApi from "../../../api/servicesApi";
import PrimaryButton from "../../../components/shared/PrimaryButton";

const AddService = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const uploadImage = (event) => {
    const image = event.target.files[0];

    const formData = new FormData();

    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=84a5698c1163075e540df1dc6008c8cf",
        formData
      )
      .then((res) => setImageUrl(res.data.data.url));
  };
  const onSubmit = (data) => {
    const services = {
      ...data,
      image: imageUrl,
    };
    servicesApi.post("add-service", services).then((res) => {
      reset();
      setImageUrl("");
    });
  };
  return (
    <div className="add-service-section py-5">
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
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price")}
                />
              </div>

              <div className="form-control w-full mb-0 md:mb-5 max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered p-5 w-full"
                  placeholder="Enter Designation"
                  {...register("description")}
                ></textarea>
              </div>
              <div className="form-control w-full mb-5 md:mb-0 max-w-xs">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  onChange={uploadImage}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
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
