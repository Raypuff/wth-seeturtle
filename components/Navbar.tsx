import { FC } from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, store } from "../firebase";
import firebase from "firebase";

const Navbar: FC = ({ children }) => {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <div
        className="h-24 px-8 w-full flex justify-end items-center overflow-hidden"
        id="navbar"
      >
        <a className="mr-auto mt-2" href="#navbar">
          <Image
            src="/name.png"
            alt="SeeTurtle name"
            layout="fixed"
            height={55}
            width={140}
          />
        </a>
        {user ? (
          <button
            onClick={() => auth.signOut()}
            className="text-seeturtle-800 text-xl my-2 py-2 px-4 rounded-xl text-center font-black uppercase bg-gray-200 hover:grad-bg hover:text-white"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="text-seeturtle-800 text-xl my-2 py-2 px-4 rounded-xl text-center font-black uppercase bg-gray-200 hover:grad-bg hover:text-white"
          >
            Sign in
          </button>
        )}

        {children}
      </div>
      ;
    </>
  );
};
export default Navbar;
