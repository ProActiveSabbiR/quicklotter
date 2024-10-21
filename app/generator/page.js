"use client";

import { useState } from 'react';
import Image from "next/image";
import "../components/button.css"; 
import styles from "../components/table.module.css";
import Filter from "../components/filter";
import win4logo from "@/public/images/game-logo/win4logo.svg";



  

// Component for selector table
  const NumberGenerator = () => {
  
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const toggleNumber = (line, number) => {
    const uniqueNumber = `${line}-${number}`;
    
    setSelectedNumbers((prev) => 
      prev.includes(uniqueNumber) ? prev.filter(num => num !== uniqueNumber) : [...prev, uniqueNumber]
    );
  };

  const processSelectedNumbers = () => {
    if (selectedNumbers.length === 0) {
      alert('No numbers selected!');
    } else {
      console.log("Selected numbers are:", selectedNumbers);
      
    }
  };

    // Function to clear all selections
  const clearSelection = () => {
    setSelectedNumbers([]); // Reset the selected numbers array
  };

  return (
    <>
      <div className={`${styles.selectorTable}`}>
        <div>
          <div className="flex justify-center mt-2">
            <Image src={win4logo} alt="win4 logo" width={150} />
          </div>
          <div>
            <div className="flex space-x-7 mb-4 px-10 py-8">
              {[1, 2, 3, 4].map(line => (
                <div key={`selector-line-${line}`} id={`selector-line-${line}`} className={`mb-2 ${styles.selectorBtns}`}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => {
                    const uniqueNumber = `${line}-${number}`;
                    
                    return (
                      <div
                        key={number}
                        onClick={() => toggleNumber(line, number)}
                        className={`cursor-pointer ${selectedNumbers.includes(uniqueNumber) ? 'bg-[#7e0c6e] text-white' : 'bg-white'} p-2`}
                      >
                        {number}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-5">
        <p className="text-white">Generate powerful combinations.</p>
        <div className={` ${styles.switchBtn}`}>
          <div className={` ${styles.btnCircle}`}></div>
        </div>
      </div>

      <div className="flex space-x-4 my-4 justify-center">
        <button 
          className="ql-button bg-[#ff0000] hover:bg-[#cc0000] w-40">
          <div className="text-wrapper text-[#fff]"
          onClick={clearSelection}>Clear Selections</div>
        </button>
        <button 
          className="ql-button bg-[#00ff38] hover:bg-[#01D52F] w-40">
          <div className="text-wrapper text-[#4B4B4B]"
          onClick={processSelectedNumbers}>Generate</div>
        </button>
      </div>
    </>
  );
};


const Generator = () => {
  return (

    <div className="ql-container mx-auto flex bg-[#7E0C6E]">
      <div className="flex">
        <div className="p-8">
          <div className="flex justify-center space-x-5 pb-5">
            <div>
              <p className="text-white text-center">Selected</p>
              <div className={`${styles.tableInfoBtn} w-[100px]`}>
                <p>12</p>
              </div>
            </div>
            <div>
              <p className="text-white text-center">Lines</p>
              <div className={`${styles.tableInfoBtn} w-[100px]`}>
                <p>1000</p>
              </div>
            </div>
          </div>
          {/* generatore selector table */}
          <NumberGenerator />
        </div>
      </div>

      <div className="bg-[#ede6f2] flex">
        {/* Filter area */}
        <Filter />

        
        {/* lines and statistics area */}
        <div className="py-3 pr-5 bg-[#F5F8FF] flex">
          <div className={`${styles.generatedLines} space-y-1 px-7 `}>
            <div className={`${styles.lineTitle} h-[85px] bg-[#7E0C6E] flex items-center justify-center`}>
              <h2>My Lines</h2>
            </div>
            <div className={`${styles.ballsWrapper} flex space-x-2 justify-center`}>
              <div className=" flex items-center w-[30px]">
                <span id='line-index'>1</span>
              </div>
              <div className={`${styles.balls}`}>1</div>
              <div className={`${styles.balls}`}>2</div>
              <div className={`${styles.balls}`}>3</div>
              <div className={`${styles.balls}`}>4</div>
            </div>
          </div>
          <div className={`space-y-1 px-6 `}>

            <div className={`flex space-x-2 ${styles.infoTitles}`}>
              <span className={` bg-[#B4B4B4]`}>SUM</span>
              <span className={` bg-[#4FB886] text-white`}>ODD</span>
              <span className={` bg-[#9589D9]`}>LOW</span>
              <span className={` bg-[#E88F77]`}>PRIME</span>
              <span className={` bg-[#FF39A6] text-white`}>FIBONACCI</span>
              <span className={` bg-[#77F0F8]`}> MULT. OF 3</span>
              <span className={` bg-[#32CD34]`}>ADJACENT</span>
              <span className={` bg-[#FF8903] text-white`}>REPEATED</span>
              <span className={` bg-[#000] text-white`}>SEQUENCE</span>
              <span className={` bg-[#D0FF00]`}>DIGITS</span>
            </div>

            <div className={`${styles.infoBlocks} flex space-x-2 justify-center`}>
              <div>0</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Generator;
