import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
      <div className="w-full svg-bg flex justify-center overflow-hidden">
        <div className="max-w-7xl pr-16 pl-32 h-full w-full relative hidden md:inline">
          {children}
        </div>
        <div className="md:hidden h-screen w-full flex flex-col justify-center items-center p-16">
          <h1 className="text-4xl text-white font-black text-center">
            Welcome to SeeFood!
          </h1>
          <p className="text-xl text-white mt-8 text-center">
            Unfortunately, our platform is currently only supported when viewed
            on a desktop or laptop. Sorry for the inconvenience and we sincerely
            hope you check out our website again!
          </p>
        </div>
      </div>
    </>
  );
};
export default Body;
