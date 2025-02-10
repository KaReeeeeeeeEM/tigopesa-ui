import { useState } from "react";
import "./output.css";
import Hero from "./components/hero";
import Options from "./components/Options";

function App() {
  return <div className="bg-gray-100 overflow-y-hidden">
    <Hero />  
    <Options />
  </div>;
}

export default App;
