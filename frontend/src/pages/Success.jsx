import React from "react";
import SUCCESSIMAGE from "../assets/success.gif";
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded">
      <img src={SUCCESSIMAGE} width={150} height={150} />
      <p className="text-green-400 font-bold text-xl">Payment Successfully</p>
      <Link to={"/order"} className="p-2 px-3 mt-5 border-2 border-green-400 rounded font-semibold text-green-500 hover:bg-green-400 hover:text-white transition">See Order</Link>
    </div>
  );
};

export default Success;
