import { FC } from "react";
import Image from "next/image";
import { BiPlay, BiFullscreen } from "react-icons/bi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { FaCog } from "react-icons/fa";

type Props = {
  turtleFeed?: boolean;
  embedId?: string;
};

const TurtleFeed: FC<Props> = ({ embedId, turtleFeed }) => {
  return (
    <>
      <div
        className={`aspect-w-16 aspect-h-9 w-full ${
          turtleFeed ? "video-border" : "video-border-jess"
        } relative`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Turtle Live Feed"
          className="rounded-xl rounded-b-lg"
        />
        {turtleFeed && (
          <div className="absolute w-full h-8 items-center top-[368px] flex">
            <BiPlay className="icon mr-2" />
            <BsFillVolumeUpFill className="icon" />
            <FaCog className="icon text-2xl ml-auto" />
            <BiFullscreen className="icon ml-2" />
          </div>
        )}
      </div>
    </>
  );
};
export default TurtleFeed;
