import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  // console.log(createUser)

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userInfo } = Object.fromEntries(
      formData.entries(),
    );

    console.log(email, password, userInfo);

    createUser(email, password)
      .then((result) => {
        console.log(result);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl pt-8 ite">
      <h1 className="text-5xl font-semibold text-center">Sign Up Now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />
          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            placeholder="Address"
            name="address"
          />
          <label className="label">Phone</label>
          <input
            type="number"
            className="input"
            placeholder="Phone Number"
            name="phone"
          />
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
            <a className="link link-hover">Already have an account?</a>
          </div>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
