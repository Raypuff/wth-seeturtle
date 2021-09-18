import { FC, useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { store } from "../firebase";
import firebase from "firebase";

const Donate: FC = ({ children }) => {
  const [amount, setAmount] = useState<number | null>(null);
  const [nextPage, setNextPage] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const donationsRef = store.collection("donations");
  const query = donationsRef.orderBy("createdAt", "desc").limit(10);
  const [donations] = useCollectionData(query, { idField: "id" });

  const submitDonation = async (e: any) => {
    e.preventDefault();

    await donationsRef.add({
      displayName: nameRef?.current?.value,
      amount: amount,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
            <p className="mx-8 mt-4 font-light text-lg">
              Disclaimer: Our MVP does not process real donations (yet) so feel
              free to 'donate' to save the turtles!
            </p>
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
      <h2 className="mb-4 pt-8 pb-4 text-4xl font-semibold text-center text-white">
        Latest Donations
      </h2>
      <div className="grid grid-cols-2 grid-rows-5 w-auto gap-x-16 gap-y-10 mr-4">
        {donations &&
          donations.map((donation) => {
            return (
              <div className="w-56 bg-white bg-opacity-70 h-8 flex items-center font-black uppercase text-seeturtle-800 pl-2 text-lg rounded-md">
                {donation.displayName}
                <div className="rounded-full ml-auto bg-white w-16 h-16 mr-[-32px] flex justify-center items-center text-xl font-black text-white grad-bg transform hover:scale-125 transition-all">
                  ${donation.amount}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Donate;
