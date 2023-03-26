import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center p-2">
      <button className="btn btn-primary  font-bold">{children}</button>
    </div>
  );
};

export default Button;
