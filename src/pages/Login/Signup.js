import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/shared/Loading";
import PrimaryButton from "../../components/shared/PrimaryButton";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error || gError) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || gLoading) {
    return <Loading />;
  }
  if (user || gUser) {
    return navigate(from, { replace: true });
  }
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="login md:w-2/4 mx-auto flex flex-col justify-center justify-items-center md:p-20">
      <div className="card mt-20 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Create an account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 signup-form">
            <div class="form w-full mb-5">
              <input
                class="input w-full p-5"
                placeholder="First Name"
                required
                type="text"
                {...register("firstName")}
              />
              <span class="input-border"></span>
            </div>
            <div class="form w-full mb-5">
              <input
                class="input w-full p-5"
                placeholder="Last Name"
                required
                type="text"
                {...register("lastName")}
              />
              <span class="input-border"></span>
            </div>
            <div class="form w-full mb-5">
              <input
                class="input w-full p-5"
                placeholder="Email"
                required
                type="email"
                {...register("email")}
              />
              <span class="input-border"></span>
            </div>
            <div class="form w-full mb-5">
              <input
                class="input w-full p-5"
                placeholder="Password"
                required
                type="text"
                {...register("password")}
              />
              <span class="input-border"></span>
            </div>
            <div class="form w-full mb-5">
              <input
                class="input w-full p-5"
                placeholder="Confrim Passowrd"
                required
                type="password"
                {...register("confrimPassowrd")}
              />
              <span class="input-border"></span>
            </div>
            <div className="flex justify-center">
              <PrimaryButton type="submit">Create an account</PrimaryButton>
            </div>
          </form>
          <p className="text-center mt-5">
            Already have an account?
            <Link to="/login" className="text-primary">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="divider">OR</div>
      <div className="py-5 relative flex justify-center">
        <button class="google-login" onClick={() => signInWithGoogle()}>
          <span class="text">Continue with Google</span>
          <span class="icon">
            <FcGoogle size={30} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
