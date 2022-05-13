import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from 'react-toastify';
//  import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const SignGoogle = () => {
  const [signInWithGoogle, user, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubloading, githuberror] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // if (googleerror || githuberror) {
  //   toast("you are not Sign in!");
  // }
  const handlegoogleSignIn = () => {
    signInWithGoogle();
    navigate(from, { replace: true });
  };
  const handleGithubSignIn = () => {
    signInWithGithub();
    navigate(from, { replace: true });
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      <img
        onClick={handlegoogleSignIn}
        className="d-block mb-3 w-50 "
        src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
        alt=""
      />
      <br />
      <img
        onClick={handleGithubSignIn}
        className="d-block  w-50 "
        src="https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/4363/github.png"
        alt=""
      />
    </div>
  );
};

export default SignGoogle;
