import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
    </>
  );

  return (
    <div className="bg-amber-100 p-4">
      <div className="flex justify-evenly items-center">

        <NavLink to="/" className="text-xl">
          Toy<span className="font-bold text-gray-700">Topia</span>
        </NavLink>

        <div className="flex items-center gap-4">
          {links}

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                    alt="Profile"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <span className="font-semibold">
                    {user.displayName || user.email}
                  </span>
                </li>
                <li onClick={handleSignOut}>
                  <a>Logout</a>
                </li>
                <Link to='/profile'>My Profile</Link>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
