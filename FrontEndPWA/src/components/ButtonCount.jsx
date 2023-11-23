import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Button = () => {
  const [numero, setNumero] = useState(1);

  const [color, setColor] = useState("black");

  const colorRopa = () => {
    const element = document.querySelector(".btn");

    if (element.disabled) {
      setColor("gray-400");
    } else {
      setColor("black");
    }
  };
  useEffect(() => {
    // Update the document title using the browser API
    colorRopa()
  });
  return (
    <div>
      <button
        onClick={() => {
           setNumero(numero - 1)
        }}
        disabled={numero === 1}
        className={` btn border-2 border-${color} rounded-full w-7 mx-2`}
      >
        -
      </button>
      <button className="border-2 border-black rounded-md w-14" type="button">{numero}</button>
      <button
        onClick={() => setNumero(numero + 1)}
        className="border-2 border-black rounded-full w-7 mx-2"
      >
        +
      </button>
    </div>
  );
};

export default Button;

