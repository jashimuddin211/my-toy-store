import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { signInWithGoogle, createUser } = useContext(AuthContext);

  // 🔹 Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  // 🔹 Email & Password Register
  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(result => {
        console.log('User created:', result.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <button className="btn btn-neutral mt-4">
                  Register
                </button>

                {/* Google */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5] mt-2"
                >
                  Login with Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
