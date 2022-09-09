import React, { useState, useEffect } from "react";
import { TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithGoogle,
} from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
    if (user) navigate("/");
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <>
      <div className="flex items-center justify-center p-6">
        <div className="flex items-center justify-center bg-gray-100 rounded-lg shadow dark:border px-4">
          <div className="p-6 space-y-4 md:space-y-6 flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
              LogIn
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={logIn}
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  E-MAIL
                </label>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="email@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  name="email"
                  className="bg-gray-50 items-center border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  PASSWORD
                </label>
                <TextInput
                  id="password1"
                  type="password"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 items-center border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 items-center border text-white rounded-lg block w-full p-2.5"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={registerWithGoogle}
                className="bg-blue-600 items-center border text-white rounded-lg block w-full p-2.5"
              >
                Google
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  to="/registration"
                  className="font-medium text-blue hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {/* <a
                    href="#"
                    className="font-medium text-blue hover:underline dark:text-primary-500"
                  >
                    Need a help?
                  </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
