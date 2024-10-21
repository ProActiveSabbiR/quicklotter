import React, { useState } from 'react';
import IMAGE from "next/image"
import styles from "./filter.module.css";
import "@/app//globals.css";
import PrintIcon from "@/public/icons/printer.png";
import FileIcon from "@/public/icons/file.png";
import SaveIcon from "@/public/icons/save.png";
import DeleteIcon from "@/public/icons/delete.png";

// component
const InputControler = ()=>{
  return (
    
   <div className="spinner-buttons">
     {/* Up Arrow */}
      <button 
        onClick={(e) => e.currentTarget.parentElement.previousElementSibling.stepUp()} 
        className="spinner-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
          <path d="M0.545049 3.86239C0.362588 3.67993 0.362588 3.38576 0.545049 3.2033L3.63943 0.108918C3.78465 -0.0363059 4.01925 -0.0363059 4.16447 0.108918L7.25885 3.2033C7.44131 3.38576 7.44131 3.67993 7.25885 3.86239C7.07639 4.04485 6.78222 4.04485 6.59976 3.86239L3.90009 1.16644L1.20042 3.86612C1.02168 4.04485 0.723785 4.04485 0.545049 3.86239Z" fill="#B1B1B1" />
        </svg>
      </button>
     {/* Down Arrow */}
      <button 
        onClick={(e) => e.currentTarget.parentElement.previousElementSibling.stepDown()} 
        className="spinner-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" style={{ transform: 'rotate(180deg)' }}>
          <path d="M0.545049 3.86239C0.362588 3.67993 0.362588 3.38576 0.545049 3.2033L3.63943 0.108918C3.78465 -0.0363059 4.01925 -0.0363059 4.16447 0.108918L7.25885 3.2033C7.44131 3.38576 7.44131 3.67993 7.25885 3.86239C7.07639 4.04485 6.78222 4.04485 6.59976 3.86239L3.90009 1.16644L1.20042 3.86612C1.02168 4.04485 0.723785 4.04485 0.545049 3.86239Z" fill="#B1B1B1" />
        </svg>
      </button>
    </div>
  );
}

const Filter = () => {
  
  return (
    <div className="px-2 py-5 my-2">
      <div className="flex item-center justify-center space-x-2 mb-5">
        <p className="text-default text-[#7e0c6e]">My Lines:</p>
        <div className={`${styles.tableInfoBtn}  w-[114px]`}>
          <p>14</p>
        </div>
      </div>
      {/* sum filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#b4b4b4]`}><p>SUM</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* odd filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#4FB886]`}><p>ODD</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* LOW filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#9589D9]`}><p>LOW</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* PRIME filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#E88F77]`}><p>PRIME</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* FIBONACCI filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#FF39A6]`}><p>FIBONACCI</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* MT. OF 3 filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#77F0F8]`}><p>MULT. OF 3</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* ADJACENT filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#32CD34]`}><p>ADJACENT</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* REPEATED filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#FF8903]`}><p>REPEATED</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* SEQUENCE filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#000] text-white`}><p>SEQUENCE</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>
      {/* DIGIT filter */}
      <div className={` flex sum-filter justify-center space-x-2 mt-2`}>
        <div className={`${styles.filterName} bg-[#D0FF00] text-[#333]`}><p>DIGIT</p></div>
        <div className='flex space-x-1'>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
          <span className='flex items-center font-bold'>-</span>
          <div className="ql-input flex bg-[#fff] w-[51px]">
            <input 
                type="number" 
                min="0" 
                max="100" 
                step="1" 
                defaultValue="0" 
                className="custom-input"
            />
            <InputControler/>
          </div> 
        </div>
      </div>

      {/* action buttons */}
      <div className='mt-10 flex flex-col space-y-2'>
        <button className={`${styles.filterBtn} text-white border-2 border-white bg-[#7e0c6e]`}>Quick Pick</button>
        <button className={`${styles.filterBtn} text-[#4B4B4B] border-2 border-[#7E0C6E] bg-[#00FF38]`}>Aply Filters</button>
        <button className={`${styles.filterBtn} text-[#fff] border-2 border-[#7E0C6E] bg-[#F00]`}>Clear Filters</button>
        <button className={`${styles.filterBtn} text-[#fff] border-2 border-[#7E0C6E] bg-[#000]`}><IMAGE src={PrintIcon } />Print</button>
        <button className={`${styles.filterBtn} text-[#fff] border-2 border-[#7E0C6E] bg-[#2C46CD]`}><IMAGE src={FileIcon } />Opent</button>
        <button className={`${styles.filterBtn} text-[#000] border-2 border-[#7E0C6E] bg-[#FFE700]`}><IMAGE src={SaveIcon } />Save</button>
        <button className={`${styles.filterBtn} text-[#fff] border-2 border-[#7E0C6E] bg-[#FE148E]`}><IMAGE src={DeleteIcon } />Delete</button>
      </div>
    </div>
  );
};

export default Filter;
