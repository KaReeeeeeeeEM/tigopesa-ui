import React from "react";
import TButton from "./Button";
import { FaWallet } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      <div className="w-full h-[200px] md:h-[450px] bg-gray-400">
        <img
          src="/tigopesa-logo.png"
          alt="tigopesa-logo"
          className="w-full h-full object-fit md:object-cover"
        />
      </div>

      <div className="max-w-xs md:max-w-3xl lg:max-w-7xl mx-auto">
        <TButton label="Check Balance" icon={<FaWallet />} className="w-full mt-4 rounded-md bg-[#FFD65A] text-[#3674B5] font-semibold py-3 cursor-pointer" />
      </div>
    </div>
  );
}
