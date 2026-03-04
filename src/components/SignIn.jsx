import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signIn } = use(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("https://coffee-store-server-rho-navy.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("Data after patch", result);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl pt-8 ite">
        <h1 className="text-5xl font-semibold text-center">Sign In Now!</h1>
        <div className="card-body">
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Don't have an account?</a>
            </div>
            <button className="btn btn-neutral mt-4">SignIn</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
