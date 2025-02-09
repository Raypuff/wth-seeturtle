import { FC, useState } from "react";
import CountUp from "react-countup";
import { Data } from "../interfaces";
import { Fade } from "react-awesome-reveal";

type Props = {
  selected: Data;
};

const Dashboard: FC<Props> = ({ selected }) => {
  return (
    <div className="opacity-70">
      <h1 className="font-semibold text-3xl text-white pl-2">
        {selected.date}
      </h1>
      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl transform hover:scale-110 transition-all">
        <h2 className="text-lg font-semibold text-white">
          Microplastics collected
        </h2>
        <h1 className="text-5xl font-semibold text-lightblue">
          <CountUp
            start={0}
            end={selected.microplastic}
            delay={0}
            duration={0.4}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />g
              </div>
            )}
          </CountUp>
        </h1>
      </div>

      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl transform hover:scale-110 transition-all">
        <h2 className="text-lg font-semibold text-white">Trash seen</h2>
        <h1 className="text-5xl font-semibold text-lightred">
          <CountUp start={0} end={selected.trash} delay={0} duration={0.4}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} /> objects
              </div>
            )}
          </CountUp>
        </h1>
      </div>

      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl transform hover:scale-110 transition-all">
        <h2 className="text-lg font-semibold text-white">Distance travelled</h2>
        <h1 className="text-5xl font-semibold text-lightblue">
          <CountUp start={0} end={selected.distance} delay={0} duration={0.4}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                km
              </div>
            )}
          </CountUp>
        </h1>
      </div>

      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl transform hover:scale-110 transition-all">
        <h2 className="text-lg font-semibold text-white">
          Current temperature
        </h2>
        <h1 className="text-5xl font-semibold text-lightred">
          <CountUp start={0} end={selected.temp} delay={0} duration={0.4}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                °C
              </div>
            )}
          </CountUp>
        </h1>
      </div>
    </div>
  );
};
export default Dashboard;
