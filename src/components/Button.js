import "../css/Button.css";
import { useState } from "react";

const Button = ({ clickAction, clickValue }) => {
  return (
    <div>
      <button
        onClick={() => {
          clickAction(clickValue);
        }}
      >
        +{clickValue}
      </button>
    </div>
  );
};

export default Button;
