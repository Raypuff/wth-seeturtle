import { FC } from "react";
import Image from "next/image";
import {
  BiHomeAlt,
  BiDonateHeart,
  BiVideo,
  BiQuestionMark,
  BiInfoCircle,
} from "react-icons/bi";
import { AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";

const Navbar: FC = () => {
  return (
    <>
      <div className="absolute w-16 left-8 h-screen">
        <div className="flex flex-col w-16 fixed justify-between items-center h-full py-8">
          <a href="#navbar">
            <Image
              src="/icon.png"
              alt="SeeTurtle icon"
              layout="fixed"
              height={36}
              width={36}
            />
          </a>

          <div className="flex flex-col gap-8 mt-auto">
            <a href="#landing">
              <BiHomeAlt className="icon" />
            </a>
            <a href="#video">
              <BiVideo className="icon" />
            </a>
            <a href="#donate">
              <BiDonateHeart className="icon" />
            </a>
            <a href="#aboutus">
              <BiInfoCircle className="icon" />
            </a>
            <a href="#how">
              <BiQuestionMark className="icon" />
            </a>
            <a href="#videopitch">
              <AiOutlineYoutube className="icon" />
            </a>
          </div>
          <a
            href="https://github.com/Raypuff/wth-seeturtle"
            target="blank"
            rel="noreferrer"
            className="mt-auto"
          >
            <AiOutlineGithub className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
