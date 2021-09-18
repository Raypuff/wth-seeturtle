import { FC, useState } from "react";
import CountUp from "react-countup";

type Data = {
  date: string;
  microplastic: number;
  trash: number;
  distance: number;
  temp: number;
};

const Dashboard: FC = () => {
  const [selected, setSelected] = useState(dummyData[0]);

  return (
    <div className="opacity-70">
      <h1 className="font-semibold text-3xl text-yellow-400">
        {selected.date}
      </h1>
      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl">
        <h2 className="text-lg font-semibold text-white">
          Microplastics collected
        </h2>
        <h1 className="text-5xl font-semibold text-lightblue">
          <CountUp start={0} end={selected.microplastic} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />g
              </div>
            )}
          </CountUp>
        </h1>
      </div>

      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl">
        <h2 className="text-lg font-semibold text-white">Trash seen</h2>
        <h1 className="text-5xl font-semibold text-lightred">
          {selected.trash} objects
        </h1>
      </div>

      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl">
        <h2 className="text-lg font-semibold text-white">Distance travelled</h2>
        <h1 className="text-5xl font-semibold text-lightblue">
          {selected.distance}km
        </h1>
      </div>

      <div className="mt-4 pt-2 pb-6 px-4 bg-dark90 rounded-2xl">
        <h2 className="text-lg font-semibold text-white">
          Current temperature
        </h2>
        <h1 className="text-5xl font-semibold text-lightred">
          {selected.temp}°C
        </h1>
      </div>
    </div>
  );
};
export default Dashboard;

const dummyData: Data[] = [
  {
    date: "19 September 2021",
    microplastic: 83,
    trash: 13,
    distance: 102,
    temp: 6,
  },
];
