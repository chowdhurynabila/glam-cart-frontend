

import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../Components/login-registration/GoogleLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const { CreateUser } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];

    const userData = { email, role, status, wishlist };

    CreateUser(data.email, data.password).then(() => {
      axios.post("http://localhost:5000/users", userData).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
    });

   
    // console.log(userData);
  };

  return (
    <div className="hero bg-orange-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register & Join the Glam Cart Community</h1>
          <p className="py-6">
          Sign up to unlock exclusive offers, stay updated with the latest trends, and enjoy a seamless shopping experience for all your favorite accessories.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                  pattern: {
                    value: /[!@#$%^&*(),.?":{}|<>]/,
                    message: "Password must include at least one special character",
                  },
                })}
              />
              {errors.password && <p className=" text-red-600 text-sm font-light">{errors.password.message}</p>}
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className=" text-red-600 text-sm font-light">
                  {" "}
                  Both passwords must match.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", { required: true })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className=" text-red-600 text-sm font-light">
                  {" "}
                  You must select a role.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success">
              Create Account
              </button>
            </div>
            <GoogleLogin />

            <p className="my-4 text-sm font-light">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
