import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  // const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  const toast = useToast();
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      const loggedUser = result.user;
      console.log("Logged Social User", loggedUser);
      const savedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      axios
        .post("http://localhost:5000/users", savedUser)
        .then((data) => {
          console.log(data.data);
          if (data.data.insertedId) {
            toast({
              title: `Profile of ${loggedUser.displayName} Updated`,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top center",
            });
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    });
  };
  return (
    <div className="text-center">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-circle btn-outline text-blue-500 text-2xl my-4"
      >
        <FaGoogle title="Google Login"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
