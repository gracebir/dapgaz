import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-[#E87717] text-white rounded-lg px-6 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
