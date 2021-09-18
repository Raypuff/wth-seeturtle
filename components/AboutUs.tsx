import { FC } from "react";
import Image from "next/image";
import Challenge from "../components/Challenge";

const AboutUs: FC = ({ children }) => {
  return (
    <div className="mx-8" id="aboutus">
      <div>
        <Challenge></Challenge>
      </div>

      <div>
        <div className="grid grid-cols-2 h-4/5">
          <div className="flex justify-center items-center h-full">
            <Image
              src="/trash.jpeg"
              alt="Fish Icon"
              layout="fixed"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-white text-right text-5xl font-semibold">
              <span className="font-semibold">A Real</span>
              <br />
              <span className="font-semibold">Problem</span>
            </h1>

            <div className="pl-10">
              <p className="text-right text-white text-lg font-light mt-6">
                microplastic crystals with sizes of a grain of rice down to
                microscopic are tiny and has been injested by wide range of
                creatures in the marine wildlife community
              </p>
              <p className="text-right text-white text-lg font-light mt-6">
                According to the UN Environment Programme, 13 million tonnes of
                plastic leak into our oceans every year, causing an estimated
                $13 billion of economic damage to global marine ecosystems.
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
      </div>
      <div>
        <br />
        <h1 className="text-white text-center text-5xl font-semibold">
          <span className="font-semibold">Threat to the sea community</span>
        </h1>
        <p className="text-right text-white text-lg font-light mt-6">
          microplastic crystals with sizes of a grain of rice down to
          microscopic are tiny and has been injested by wide range of creatures
          in the marine wildlife community
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
