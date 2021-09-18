import { FC } from "react";

const Challenge: FC = ({ children }) => {
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="max-w-7xl pr-16 pl-32 h-full w-full relative">
          {children}
          <br/>
      <br/>
           <h1 className="text-white text-centre text-7xl font-semibold">
          <span className="font-semibold">Our Challenge</span>
          <div className ="pl-8">
          <p
            className="text-left text-white text-lg font-light mt-5"
          >Waste Management: Hidden Microplastic Crystals</p>

          </div>
        </h1>

    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        </div>
      </div>
    </>
  );
};
export default Challenge;