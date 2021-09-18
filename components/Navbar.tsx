import { FC } from "react";
import Image from "next/image";

const Navbar: FC = ({ children }) => {
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
        <p className="text-white text-lg">Sign up</p>
        {children}
      </div>
      ;
    </>
  );
};
export default Navbar;
