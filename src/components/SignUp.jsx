import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
    const {email} = use(AuthContext);
    console.log(email)
  return (
          <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl pt-8 ite">
            <h1 className="text-5xl font-semibold text-center">Sign Up Now!</h1>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Already have an account?</a>
                </div>
                <button className="btn btn-neutral mt-4">SignUp</button>
              </fieldset>
            </div>
          </div>
  );
};

export default SignUp;
