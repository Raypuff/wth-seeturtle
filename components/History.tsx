import { Dispatch, FC, SetStateAction } from "react";
import { Data } from "../interfaces";
import { HiFilter, HiTrash } from "react-icons/hi";
import { IoIosSpeedometer } from "react-icons/io";
import { FaThermometerHalf } from "react-icons/fa";

type Props = {
  setSelected: Dispatch<SetStateAction<Data>>;
  allData: Data[];
};

const History: FC<Props> = ({ setSelected, allData }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-white my-6">History</h1>
      <div className="overflow-y-scroll h-[298px] scrollbar scrollbar-thumb-seeturtle-600 scrollbar-track-seeturtle-300 hover:scrollbar-thumb-seeturtle-700 scrollbar-thin">
        {allData.map((data) => {
          return (
            <button
              className="bg-dark90 mb-2 bg-opacity-70 w-full py-4 px-4 hover:bg-opacity-100 rounded-xl flex items-center gap-4"
              onClick={() => setSelected(data)}
              key={data.date}
            >
              <span className="text-white font-semibold">{data.date}</span>
              <HiFilter className="text-lg text-lightblue ml-auto" />
              <HiTrash className="text-lg text-lightred" />
              <IoIosSpeedometer className="text-lg text-lightblue" />
              <FaThermometerHalf className="text-lg text-lightred" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default History;
