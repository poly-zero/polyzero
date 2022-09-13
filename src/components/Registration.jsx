import React, { useState, useEffect } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  registerWithGoogle,
} from "../firebase/firebase";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [name, setName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  let navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    if (password !== confirmationPassword) {
      setPassword("");
      setConfirmationPassword("");
      alert("Your Password does not match with your confirmation password");
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/footprint");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg shadow dark:border px-4">
        <div className="p-6 space-y-4 md:space-y-6 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
            Registration
          </h1>
          <form className="flex flex-col gap-4" onSubmit={register}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="user1" value="Your User Name" />
              </div>
              <TextInput
                id="user1"
                type="text"
                placeholder="username"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirmationPassword"
                  value="Confirm your password"
                />
              </div>
              <TextInput
                id="confirmationPassword"
                type="password"
                required={true}
                value={confirmationPassword}
                onChange={(e) => setConfirmationPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <Button type="submit">Register</Button>
              <hr />
              <Button type="submit" onClick={registerWithGoogle}>
                Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
