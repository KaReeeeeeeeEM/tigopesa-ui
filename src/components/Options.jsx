import React from "react";
import TButton from "./Button";
import { FaCashRegister, FaExchangeAlt, FaFile, FaPiggyBank, FaWallet } from "react-icons/fa";
import { MdFileOpen, MdPayment } from "react-icons/md";
import { BiCart } from "react-icons/bi";

const Categories = [
    {
        id: 1,
        name: 'Send Money',
        icon: <FaWallet />,
    },
    {
        id: 2,
        name: 'Bill Pay',
        icon: <FaFile />,
    },
    {
        id: 3,
        name: 'Transfer To Bank',
        icon: <FaExchangeAlt />,
    },
    {
        id: 4,
        name: 'Cash Out',
        icon: <FaCashRegister />,
    }, 
    {
        id: 5,
        name: 'Top Up',
        icon: <FaPiggyBank />,
    }, 
    {
        id: 6,
        name: 'Pay Merchant',
        icon: <MdPayment />,
    }, 
    {
        id: 7,
        name: 'Tigo Shop',
        icon: <BiCart />,
    }, 
    {
        id: 8,
        name: 'My Activities',
        icon: <MdFileOpen />,
    }
]

export default function Options() {
  const [text, setText] = React.useState("");

  const speak = (message) => {
    if (!message.trim()) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

    // Speak when `text` changes
    React.useEffect(() => {
      speak(text);
    }, [text]);

  return (
    <div className="max-w-xs md:max-w-3xl lg:max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4 gap-3 pb-6">
      {Categories.map((category) => (
        <TButton
          key={category.id}
          label={category.name}
          icon={category.icon}
          onPress={() => setText(category.name)}    
          className="flex flex-col items-center justify-center border-b border-gray-200 py-10 rounded-md bg-white text-[#3674B5] lg:py-16 cursor-pointer"
        />
      ))}
    </div>
  );
}
