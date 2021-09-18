import { FC } from "react";
import Image from "next/image";

const AboutUs: FC = ({ children }) => {
  return (
    <div className="mx-8 overflow-hidden" id="aboutus">
      <h1 className="text-6xl py-8 font-semibold text-center text-white">
        Our Challenge
      </h1>
      <p className="text-center text-white text-lg font-light mt-4 mb-16">
        Waste Management: Hidden Microplastic Crystals
      </p>

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
                Microplastic crystals with sizes of a grain of rice down to
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
        <br />
        <h1 className="text-white text-center text-5xl font-semibold">
          <span className="font-semibold">Threat to the ocean wildlife</span>
        </h1>
        <br />
        <p className="text-center text-white text-lg font-light mt-6">
          According to Nottingham University, many toxic chemicals can also
          adhere to the surface of plastic. If ingested, contaminated
          microplastics could expose organisms to high concentrations of toxins
        </p>

        <p className="text-center text-white text-lg font-light mt-6">
          As more microplastics fill our marine environment, and are consumed by
          the creatures that inhabit our waters, greater concentrations of these
          plastic particles are entering our food chain.
        </p>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default AboutUs;
