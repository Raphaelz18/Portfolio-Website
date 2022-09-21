import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      
      {/* Text container */}
      <header className=" absolut md:flex-row mt-10 mb-10 md:pt-40 mx-10 md:my-20 lg:my-0 max-w-lg">
          <h1 className="text-5xl md:text-7xl  font-bold text-gray-700 dark:text-gray-200 my-0 md:my-2 text-left">
          Willkommen </h1> 
          <h1 className="text-1xl md:text-3xl font-light text-gray-700 dark:text-gray-200 my-2 text-center md:text-left mt-10">
                Mein Name ist Raphael Zähringer.
              </h1><h1 className="text-1xl md:text-3x1 font-light text-gray-700 dark:text-gray-200 my-2 text-center md:text-left">
                Derzeit bin ich Master-Student an der Julius-Maximilians Universität Würzburg im Bereich Human Computer Interaction.
          </h1>    
      </header>


        
      {/* Image container */}
      <div className="hidden lg:block flex w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
            <img src={userData.avatarUrl} alt="avatar" className=" shadow rounded-full justify-self-center"/>
        
        </div>
      </div>
    </div>
  );
}
