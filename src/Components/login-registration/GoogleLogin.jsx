import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../hooks/UseAuth";

const GoogleLogin = () => {
  const { GoogleLogin } = UseAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin().then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary btn-outline w-full"
        >
          <FcGoogle size={24} /> Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
