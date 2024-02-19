import React from "react";

function Button({ name, children, onClick, secondary }) {
  return (
    <button
      onClick={onClick}
      className={
        secondary
          ? "bg-white border-[2px] border-primary text-black p-2 w-full rounded-[0.75rem] font-semibold gap-2 flex justify-center items-center"
          : "bg-primary text-white p-2 w-full rounded-[0.75rem] font-semibold gap-2 flex justify-center items-center"
      }
    >
      {children}
      {name}
    </button>
  );
}

export default Button;
