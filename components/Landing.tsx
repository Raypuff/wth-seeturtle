import { FC } from "react";
import Image from "next/image";
import { BiVideo } from "react-icons/bi";

const Landing: FC = ({ children }) => {
  return (
    <div className="h-almost mx-8" id="landing">
      <div className="grid grid-cols-2 h-4/5">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-left text-6xl font-semibold">
            <span className="font-semibold">See</span> our
            <br />
            <span className="font-semibold">Turtles</span> in action
          </h1>
          <p className="text-left text-white text-lg font-light mt-6">
            Our turtles eat microplastics so that real ones don't have to
          </p>
          <a
            className="text-seeturtle-800 text-2xl bg-gray-200 hover:grad-bg max-w-max font-black uppercase flex items-end px-5 py-3 rounded-xl mt-6 hover:bg-lightblue hover:text-white"
            href="#video"
          >
            Watch live feed
            <BiVideo className="text-3xl ml-2" />
          </a>
        </div>
        <div className="flex justify-center items-center h-full">
          <Image
            src="/icon.png"
            alt="SeeTurtle Icon"
            layout="fixed"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
