import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithGoogle,
} from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ReactComponent as Google } from "../assets/loginIcons/google.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const storedPayment = localStorage.getItem("payment");

  const logIn = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user && storedPayment) navigate("/payment");
    else if (user) navigate("/wizard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div className="relative flex items-center justify-center flex-grow p-6 bg-gray-800 opacity-90">
      <Card className="z-40">
        <CardBody>
          <div className="relative z-40 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
              <h5>Log in with</h5>
            </div>
            <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
              <button
                type="button"
                className="inline-block px-3 py-3 m-auto mb-4 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                onClick={registerWithGoogle}
              >
                <Google />
              </button>
              <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                <p className="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white text-slate-400">
                  or
                </p>
              </div>
            </div>
            <div className="flex-auto p-6">
              <form action="#" onSubmit={logIn}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-primary-600 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                    placeholder="Email"
                    aria-label="Email"
                    name="email"
                    aria-describedby="email-addon"
                    aria-required
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-primary-600 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                    placeholder="Password"
                    aria-label="Password"
                    name="password"
                    aria-describedby="password-addon"
                    aria-required
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 mb-2 text-sm font-bold text-center text-white capitalize transition-all ease-in bg-blue-600 border-0 rounded-lg shadow-md cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-xs hover:border-blue-800 hover:bg-blue-800 hover:text-white"
                  >
                    Log in
                  </Button>
                </div>
                <p className="mt-4 mb-0 text-sm leading-normal text-center">
                  Don't have an account yet?{" "}
                  <Link to="/registration" className="font-bold text-slate-700">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
