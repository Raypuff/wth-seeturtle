import { FC } from "react";

const CAD: FC = ({ children }) => {
  return (
    <div className="w-full" id="how">
      {children}
      <h1
            className="text-left text-white text-lg font-light mt-5"
          >3D Modelling</h1>
    </div>
  );
};
export default CAD;