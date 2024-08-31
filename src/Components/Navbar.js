import React, { useEffect, useState } from 'react';
import { auth } from '../Utils/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../Utils/userSlice';
import { navItems } from '../Utils/constants';
import { SiGooglegemini } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import NavLinks from './NavLinks';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/BrowseMenu");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className="h-20 absolute px-4 bg-purple-400 backdrop-blur-lg z-10 w-screen flex items-center justify-between"
    >
      <img
        className="h-[60px] w-[180px] object-cover rounded-lg"
        src="/nav_logo.png"
        alt="logo"
      />

      {user && (
        <>
          <NavLinks
            handleSignOut={handleSignOut}
            navStyle="invisible md:visible flex items-center mr-5 px-2"
            buttonStyle="text-white py-2 px-4 m-2 bg-fuchsia-600 rounded-lg opacity-80 font-semibold"
          />

          <button
            className="inline-block md:hidden mr-5 text-white text-3xl"
            onClick={() => setToggleNav((prev) => !prev)}
          >
            {toggleNav ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>

          {toggleNav && (
            <NavLinks
              toggleNavSideBar={() => setToggleNav(false)}
              handleSignOut={handleSignOut}
              navStyle="absolute top-[100%] w-screen bg-gray-900 bg-opacity-95 backdrop-blur-md visible md:invisible flex-col justify-center -ml-4"
              buttonStyle="text-white py-2 px-4 m-1 w-full font-semibold hover:bg-violet-600"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
