import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export const FormTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobalState();

  const generarID = () => {
    let a = Date.now().toString(36);
    let b = Math.random().toString(36).substring(2);
    return a + b;
  };

  const onSubmit = (e) => {

   e.preventDefault();

   if (amount===0) return

    addTransaction({ id: generarID(), description, amount });
    setDescription("");
    setAmount(0);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4 my-6 bg-white shadow-md rounded-lg">
      <form className="flex flex-col sm:flex-row justify-between items-center" onSubmit={onSubmit}>
        <input
          className="w-full sm:w-1/3 px-4 py-2 mb-4 sm:mb-0 sm:mr-4 text-black border border-gray-300 rounded-md"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
          placeholder="Enter a Description"
        />
        <input
          className="w-full sm:w-1/3 px-4 py-2 mb-4 sm:mb-0 sm:mr-4 text-black border border-gray-300 rounded-md"
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        value={amount}
          placeholder="00.00"
        />
        <button className="w-full sm:w-auto bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition duration-300">
          Add Transaction
        </button>
      </form>
    </div>
  );
};
 