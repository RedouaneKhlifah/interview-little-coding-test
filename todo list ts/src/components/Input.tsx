import React, { ChangeEvent } from 'react';


interface InputProps {
  text: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  error : boolean
}

const Input: React.FC<InputProps> = ({ text, onchange ,error }) => {
  return (
    <input
    className={`text-lg text-mainGray  w-full bg-transparent px-3 rounded-md border ${error ? 'border-red-500 placeholder-red-500' : 'border-main placeholder-mainGray'} focus:outline-none focus:border-main placeholder-opacity-70`}
    type="text"
      value={text}
      onChange={onchange} 
      placeholder="Add a new task"
    />
  );
};

export default Input;