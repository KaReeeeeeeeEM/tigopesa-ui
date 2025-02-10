import React from "react";
import TButton from "./Button";
import { FaWallet } from "react-icons/fa";

export default function Hero() {
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
    <div>
      <div className="w-full h-[250px] md:h-[450px] bg-gray-400">
        <img
          src="/tigopesa-logo.png"
          alt="tigopesa-logo"
          className="w-full h-full object-fit md:object-cover"
        />
      </div>

      <div className="max-w-xs md:max-w-3xl lg:max-w-7xl mx-auto">
        <TButton onPress={() => setText("Check Balance")} label="Check Balance" icon={<FaWallet />} className="w-full mt-4 rounded-md bg-[#FFD65A] text-[#3674B5] font-semibold py-3 cursor-pointer" />
      </div>
    </div>
  );
}
