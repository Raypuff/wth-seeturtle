import { FC, useState } from "react";
import Dashboard from "./Dashboard";
import History from "./History";
import { Data } from "../interfaces";

const LeftGrid: FC = ({ children }) => {
  const [selected, setSelected] = useState<Data>(
    dummyData.sort((a, b) => {
      if (new Date(b.date) < new Date(a.date)) {
        return -1;
      } else {
        return 1;
      }
    })[0]
  );

  return (
    <div className="col-span-2 ml-8 mr-8">
      <Dashboard selected={selected} />
      <History setSelected={setSelected} allData={dummyData} />
    </div>
  );
};
export default LeftGrid;

const dummyData: Data[] = [
  {
    date: "19 September 2021",
    microplastic: 83,
    trash: 13,
    distance: 102,
    temp: 6,
  },
  {
    date: "18 September 2021",
    microplastic: 12,
    trash: 3,
    distance: 36,
    temp: 9,
  },
  {
    date: "17 September 2021",
    microplastic: 93,
    trash: 42,
    distance: 93,
    temp: 3,
  },
];
