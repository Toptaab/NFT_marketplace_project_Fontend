import React from "react";

function Input({
  name,
  children,
  onChange,
  value,
  type = "text",
  placeholder = name,
  error,
}) {

  
  return (
    <>
      <div className="border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2 relative ">
        {children}
        <input
          type={type}
          className="w-full outline-none focus:bg-blue-50"
          placeholder={placeholder}
          value={value?.name}
          name={name}
          id={name}
          onChange={onChange}
        />
        {error ? (
          <p className="text-red-500 absolute right-3">{error}</p>
        ) : null}
      </div>
    </>
  );
}

export default Input;
