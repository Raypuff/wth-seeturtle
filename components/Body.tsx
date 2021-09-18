import { FC } from "react";

const Body: FC = ({ children }) => {
  return (
    <>
      <div className="w-screen svg-bg flex justify-center overflow-hidden">
        <div className="max-w-7xl pr-16 pl-32 h-full w-full relative">
          {children}
        </div>
      </div>
    </>
  );
};
export default Body;
