import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const { signInWithGoogle, createUser } = useContext(AuthContext);
  const [error, setError] = useState('');

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
    setError('');

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // 🔐 Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log('User created:', result.user);
        console.log({ name, photoURL });
        e.target.reset();
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Create an account to explore amazing toys 🚀
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">

                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                  required
                />

                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input"
                  placeholder="Photo URL"
                  required
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                {error && (
                  <p className="text-red-600 text-sm mt-2">
                    {error}
                  </p>
                )}

                <button className="btn btn-neutral mt-4">
                  Register
                </button>

                {/* Google Login */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5] mt-2"
                >
                  Continue with Google
                </button>

                {/* Login Link */}
                <p className="text-center mt-4 text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 font-semibold">
                    Login
                  </Link>
                </p>

              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
