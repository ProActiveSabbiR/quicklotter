"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import "../components/button.css"; 
import win4logo from "@/public/images/game-logo/win4logo.svg";

const NumberGenerator = ({ onGenerate }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([[], [], [], []]);

  // Function to handle number click
  const handleNumberClick = (rowIndex, number) => {
    const updatedSelections = [...selectedNumbers];

    if (updatedSelections[rowIndex].includes(number)) {
      updatedSelections[rowIndex] = updatedSelections[rowIndex].filter((n) => n !== number);
    } else {
      updatedSelections[rowIndex].push(number);
    }

    setSelectedNumbers(updatedSelections); // Update the state with the modified selections
  };

  // Function to clear all selected numbers
  const clearSelections = () => {
    setSelectedNumbers([[], [], [], []]); // Reset all selections
    onGenerate([]); // Clear generated numbers in the parent component
  };

  // Function to generate all combinations
  const handleGenerate = () => {
    const [row1, row2, row3, row4] = selectedNumbers;

    // Ensure there is at least one number selected in each row
    if (row1.length === 0 || row2.length === 0 || row3.length === 0 || row4.length === 0) {
      alert("Please select at least one number from each row.");
      return;
    }

    // Generate all combinations using flatMap for cleaner code
    const combinations = row1.flatMap(num1 => 
      row2.flatMap(num2 => 
        row3.flatMap(num3 => 
          row4.map(num4 => [num1, num2, num3, num4])
        )
      )
    );

    console.log("Generated Combinations: ", combinations); // Debugging log
    onGenerate(combinations); // Pass the generated numbers to the parent component
  };

  // Create an array for numbers from 0 to 9
  const numbers = Array.from({ length: 10 }, (_, index) => index);

  return (
    <>
      <div className="flex flex-col items-center bg-[#F1F5F9] rounded-[10px]">
        {/* Display the game logo */}
        <div className="mt-2">
          <Image src={win4logo} alt="win4 logo" width={100} height={100} />
        </div>

        {/* Number selection grid */}
        <div className="flex space-x-7 mb-4 px-10 py-8">
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-col">
              {numbers.map((number) => (
                <div
                  key={number}
                  className={`w-8 h-8 outline outline-1 outline-[#CDCDC4] flex items-center justify-center rounded font-semibold cursor-pointer 
                    ${selectedNumbers[rowIndex].includes(number) ? "bg-[#7E0C6E] text-white" : "bg-white"} 
                    mb-2`} 
                  onClick={() => handleNumberClick(rowIndex, number)}
                >
                  {number}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons for clearing and generating selections */}
      <div className="flex space-x-4 my-4 justify-center">
        <button 
          onClick={clearSelections} 
          className="ql-button bg-[#ff0000] hover:bg-[#cc0000] w-40"
        >
          <div className="text-wrapper text-[#fff]">Clear Selections</div>
        </button>
        <button 
          onClick={handleGenerate} 
          className="ql-button bg-[#00ff38] hover:bg-[#01D52F] w-40"
        >
          <div className="text-wrapper text-[#4B4B4B]">Generate</div>
        </button>
      </div>
    </>
  );
};

export default NumberGenerator;
