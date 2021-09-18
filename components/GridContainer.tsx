import { FC } from "react";

const GridContainer: FC = ({ children }) => {
  return (
    <div id="video">
      <h1 className="ml-8 mb-4 py-8 text-6xl font-semibold text-center text-white">
        Turtle Dashboard
      </h1>
      <div className="grid grid-cols-5 w-full overflow-hidden">{children}</div>
    </div>
  );
};
export default GridContainer;
