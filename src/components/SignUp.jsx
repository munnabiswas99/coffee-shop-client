import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
    const {createUser} = use(AuthContext);
    // console.log(createUser)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        // console.log(email, password);

        createUser(email, password)
        .then(result => {
            console.log(result);
        })
        .then(error => {
            console.log(error)
        })
    }
  return (
          <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl pt-8 ite">
            <h1 className="text-5xl font-semibold text-center">Sign Up Now!</h1>
            <div className="card-body">
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Already have an account?</a>
                </div>
                <button className="btn btn-neutral mt-4">SignUp</button>
              </form>
            </div>
          </div>
  );
};

export default SignUp;
