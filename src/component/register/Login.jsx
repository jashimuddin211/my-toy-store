import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';


const Login = () => {
  const { singInUser, signInWithGoogle, loading } = useContext(AuthContext);

  // 🔹 Email & Password Login
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    singInUser(email, password)
      .then(result => {
        console.log('Logged in user:', result.user);
        e.target.reset();
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded-lg shadow mb-16">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="text-center mt-4">
        <button
          onClick={signInWithGoogle}
          className="w-full py-2 border rounded hover:bg-gray-100"
        >
          Sign in with Google
        </button>
        <br />
        <h1 className='font-bold'>or</h1>
        <br />
        <Link className='btn w-full bg-pink-400' to='/register'>Create user</Link>
      </div>
    </div>
  );
};

export default Login;
