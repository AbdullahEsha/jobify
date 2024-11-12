import React from "react";
import { envSetup } from "../../envSetup";
import { Navigate } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const [name, email, password, confirmPassword] = e.target.elements;

    if (password.value !== confirmPassword.value) {
      return alert("Password and Confirm Password do not match");
    } else {
      fetch(`${envSetup().api_url}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-4 shadow-md rounded-lg p-5 border w-96">
          <h1 className="text-4xl font-bold">Register</h1>
          <hr className="my-4" />
          <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              className="p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <hr className="my-4" />
          <div className="flex items-center justify-between">
            <a
              href="/login"
              className="text-blue-500 hover:underline text-base"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-blue-500 hover:underline text-base"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Register };
