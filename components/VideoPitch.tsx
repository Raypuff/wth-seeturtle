import { FC } from "react";
import TurtleFeed from "./TurtleFeed";

const VideoPitch: FC = () => {
  return (
    <div id="videopitch" className="flex flex-col items-center">
      <h1 className="pb-4 pt-8 text-6xl font-semibold text-center text-white">
        Video Pitch
      </h1>
      <span className="text-center text-white text-lg font-light mb-4">
        Do check out our submission on{" "}
        <a
          href="https://devpost.com/software/seeturtle-team-whalefood"
          target="blank"
          rel="noreferrer"
          className="link"
        >
          Devpost
        </a>{" "}
        where you can learn even more about the specifications of our product
        and our unique selling points!
      </span>
      <TurtleFeed embedId="xsBHRCuH2fM" />
      <div className="h-24"></div>
    </div>
  );
};
export default VideoPitch;
