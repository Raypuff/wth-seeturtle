import { FC } from "react";
import TurtleFeed from "./TurtleFeed";

const VideoPitch: FC = () => {
  return (
    <div id="videopitch">
      <h1 className="ml-8 mb-4 py-8 text-6xl font-semibold text-center text-white">
        Video Pitch
      </h1>
      <TurtleFeed embedId="xsBHRCuH2fM" />
      <div className="h-24"></div>
    </div>
  );
};
export default VideoPitch;
