import { FC, useState, useRef } from "react";
import { store } from "../firebase";

const Donate: FC = ({ children }) => {
  const [amount, setAmount] = useState<number | null>(null);
  const [nextPage, setNextPage] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const submitDonation = async (e: any) => {
    e.preventDefault();

    const donationsRef = store.collection("donations");

    await donationsRef.add({
      displayName: nameRef?.current?.value,
      amount: amount,
    });
  };

  return (
    <div
      className="w-full my-32 flex flex-col items-center content-between"
      id="donate"
    >
      <h1 className="mb-4 py-8 text-6xl font-semibold text-center text-white">
        Donate
      </h1>
      <div className="w-1/2 opacity-80 rounded-3xl shadow-inner bg-white py-8">
        {!nextPage ? (
          <>
            <h2 className="text-seeturtle-800 text-3xl font-black mx-8 text-center">
              By supporting SeeTurtle, you can support sea turtles!
            </h2>
            <p className="text-seeturtle-800 text-xl font-black text-center mt-8 uppercase">
              $5 saves a turtle
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 mx-8 my-8">
              <button
                className={` px-8 py-4 bg-gray-200 rounded-xl border-2 border-seeturtle-500 border-opacity-40
           ${
             amount === 5 ? "bg-seeturtle-700 text-white" : "text-seeturtle-800"
           }
            `}
                onClick={() => setAmount(5)}
              >
                1 turtle
              </button>
              <button
                className={` px-8 py-4 bg-gray-200 rounded-xl border-2 border-seeturtle-500 border-opacity-40
           ${
             amount === 10
               ? "bg-seeturtle-700 text-white"
               : "text-seeturtle-800"
           }
            `}
                onClick={() => setAmount(10)}
              >
                2 turtles
              </button>

              <button
                className={` px-8 py-4 bg-gray-200 rounded-xl border-2 border-seeturtle-500 border-opacity-40
           ${
             amount === 25
               ? "bg-seeturtle-700 text-white"
               : "text-seeturtle-800"
           }
            `}
                onClick={() => setAmount(25)}
              >
                5 turtles
              </button>

              <button
                className={` px-8 py-4 bg-gray-200 rounded-xl border-2 border-seeturtle-500 border-opacity-40
           ${
             amount === 50
               ? "bg-seeturtle-700 text-white"
               : "text-seeturtle-800"
           }
            `}
                onClick={() => setAmount(50)}
              >
                10 turtles
              </button>
            </div>
            <div className="flex mx-8">
              <button
                className={`uppercase bg-gray-200 text-seeturtle-800 py-6 rounded-3xl w-full text-2xl font-black  ${
                  amount && "hover:text-white hover:grad-bg"
                }`}
                onClick={() => {
                  if (amount) {
                    setNextPage(true);
                  }
                }}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="mx-8">
            <label className="text-seeturtle-800 text-xl font-black text-center mt-8 uppercase">
              Display name
            </label>
            <br />
            <input
              ref={nameRef}
              type="text"
              className="py-2 px-1 border-2 border-seeturtle-800 border-opacity-40 text-xl mt-2 w-full"
            />
            <button
              className={`uppercase bg-lightblue mt-4 text-white py-6 rounded-3xl w-full text-2xl font-black hover:text-white ${
                nameRef?.current?.value !== null && "hover:grad-bg"
              }`}
              onClick={(e) => {
                if (nameRef?.current?.value) {
                  alert(`${nameRef?.current?.value} donated ${amount}`);
                  submitDonation(e);
                  setNextPage(false);
                  setAmount(null);
                }
              }}
            >
              DONATE
            </button>
            <button
              className="uppercase bg-gray-200 mt-4 text-seeturtle-800 py-6 rounded-3xl w-full text-2xl font-black hover:text-white hover:bg-gray-400"
              onClick={() => setNextPage(false)}
            >
              Previous
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Donate;
