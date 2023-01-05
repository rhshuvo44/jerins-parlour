import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import PrimaryButton from "../../components/shared/PrimaryButton";
import "../../style/Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login flex justify-center justify-items-center p-20">
      <div className="card mt-20 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} alt="logo" className="rounded-xl w-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered p-5  w-full "
              {...register("email")}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered p-5 my-5 w-full "
              {...register("password")}
            />
            <PrimaryButton type="submit">Login</PrimaryButton>
          </form>
          <div className="divider">OR</div>
          <h2 className="card-title capitalize">Login with</h2>
          <div className="py-5">
            <button class="google-login">
              <span class="text">Continue with Google</span>
              <span class="icon">
                <FcGoogle size={30} />
              </span>
            </button>
          </div>
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary">
              Create an account
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
