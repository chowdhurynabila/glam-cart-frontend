/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../Components/login-registration/GoogleLogin";

const Login = () => {
  const { Login } = UseAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();


  const onSubmit = (data) => {
    // console.log(data);
    Login(data.email, data.password)
    navigate("/")
    
  };

  return (
    <div className="hero bg-amber-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome Back to Glam Cart!</h1>
          <p className="py-6">
          Log in to access your personalized dashboard, view your wishlist, and pick up where you left off in your shopping journey.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form  onSubmit={handleSubmit(onSubmit)}
          className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className=" text-red-600 text-sm font-light">
                  {" "}
                  Email is required.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && <p className=" text-red-600 text-sm font-light"> Password is required.</p>}
              {errors.password?.type === "minLength" && <p className=" text-red-600 text-sm font-light"> Password must have at least 6 characters.</p>}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success">Login</button>
            </div>
            <GoogleLogin/>
            <p className="my-4 text-sm font-light">
              New here?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
