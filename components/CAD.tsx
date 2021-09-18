import { FC } from "react";

const CAD: FC = ({ children }) => {
  return (
    <div className="w-full" id="CAD">
      {children}
      <br/>
      <br/>
      <h1 className="text-white text-center text-5xl font-semibold">
          SeeTurtle 3D Model Design </h1>
    </div>
  );
};
export default CAD;