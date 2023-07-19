import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  // Any additional custom props here
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, disabled = false, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`rounded p-2 text-white focus:bg-gray-700 focus:outline-none ${
        disabled ? "cursor-not-allowed bg-gray-500 hover:bg-gray-400" : "cursor-pointer bg-gray-800 hover:bg-gray-700"
      } ${props.className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
