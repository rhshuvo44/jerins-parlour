import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../shared/PrimaryButton";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contact bg-[#E5E5E5]">
      <div className="card w-full md:w-1/2 mx-auto py-20">
        <div className="card-body items-center text-center">
          <h2 className="card-title px-20">
            Let us handle your project, professionally.
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered p-5 w-full"
                {...register("firstName")}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered p-5 w-full "
                {...register("lastName")}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered p-5  w-full "
                {...register("email")}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered p-5  w-full "
                {...register("number")}
              />
            </div>
            <textarea
              className="textarea textarea-bordered my-5 p-5 w-full"
              placeholder="Your Message"
              {...register("message")}
            ></textarea>
            <PrimaryButton type="submit">Send Message</PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
