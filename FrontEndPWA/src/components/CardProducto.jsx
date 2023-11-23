import Toggle from "./Toggle";
import imagen1 from "../assets/Pantalon_Peach1.png";
import imagen2 from "../assets/Pantalon_Peach2.png";
import imagen3 from "../assets/Pantalon_Peach3.png";
import imagenL from "../assets/Pantalon_Rain.png";
import imagenM from "../assets/Pantalon_Mint.png";
import imagenR from "../assets/Pantalon_Lilac.png";

import checksvg from "../assets/check.svg";
import Button from "./ButtonCount";
import { useState } from "react";

function CardProducto() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedbg, setSelectedbg] = useState("");
  const [selectedimg, setSelectedimg] = useState(imagen1);
  const [selectedstyle, setSelectedStyle] = useState("imagen1");
  const [pantaloColor, setPantaloColor] = useState(imagen1);

  const checkStatus = (color) => {
    if (selectedColor === color) {
      setSelectedColor("");
    } else {
      setSelectedColor(color);
    }
    if (color === "violet") {
      setPantaloColor(imagenL);
    } else if (color === "sky") {
      setPantaloColor(imagenM);
    } else if (color === "green") {
      setPantaloColor(imagenR);
    } else {
      setPantaloColor(imagen1);
    }
  };
  const bgStatus = (size) => {
    if (selectedbg === size) {
      setSelectedbg("");
    } else {
      setSelectedbg(size);
    }
  };
  return (
    <section className="">
      <div className="flex mt-40  mx-40">
        <div className="flex ">
          <div className="mr-10">
            <img
              onClick={() => {
                setSelectedimg(pantaloColor);
                setSelectedStyle("imagen1");
              }}
              className={`m-5 w-32 cursor-pointer  ${
                selectedstyle === "imagen1" ? "shadow-lg shadow-indigo-500" : ""
              }`}
              src={pantaloColor}
              alt="Pantalon visto de frente"
            />
            <img
              onClick={() => {
                setSelectedimg(imagen2);
                setSelectedStyle("imagen2");
              }}
              className={`m-5 w-32 cursor-pointer  ${
                selectedstyle === "imagen2" ? "shadow-lg shadow-indigo-500" : ""
              }`}
              src={imagen2}
              alt="Pantalon bosillos"
            />
            <img
              onClick={() => {
                setSelectedimg(imagen3);
                setSelectedStyle("imagen3");
              }}
              className={`m-5 w-32 cursor-pointer  ${
                selectedstyle === "imagen3" ? "shadow-lg shadow-indigo-500" : ""
              }`}
              src={imagen3}
              alt="Pantalo visto desde atras"
            />
          </div>
          <div>
            <img className=" w-4/5" src={selectedimg} alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-between my-4">
            <h2 >Gloria Palazzo Pants</h2> <p>$70.40</p>
          </div>
          <hr />

          <div>
            <div className="my-4">
              <h4 className="my-4">Fashion Color</h4>
              <button
                onClick={() => checkStatus("orange")}
                className={`bg-orange-200 w-10 h-10 mr-3 ${
                  selectedColor === "orange" ? "border-2 border-black" : ""
                }`}
              >
                <span
                  className={`w-10 ${
                    selectedColor === "orange" ? "block" : "hidden"
                  }`}
                >
                  <img src={checksvg} alt="" />
                </span>
              </button>
              <button
                onClick={() => checkStatus("violet")}
                className={`bg-violet-600 w-10 h-10 mr-3 ${
                  selectedColor === "violet" ? "border-2 border-black" : ""
                }`}
              >
                <span
                  className={`w-10 ${
                    selectedColor === "violet" ? "block" : "hidden"
                  }`}
                >
                  <img src={checksvg} alt="" />
                </span>
              </button>
              <button
                onClick={() => checkStatus("sky")}
                className={`bg-sky-200 w-10 h-10 mr-3 ${
                  selectedColor === "sky" ? "border-2 border-black" : ""
                }`}
              >
                <span
                  className={`w-10 ${
                    selectedColor === "sky" ? "block" : "hidden"
                  }`}
                >
                  <img src={checksvg} alt="" />
                </span>
              </button>
              <button
                onClick={() => checkStatus("green")}
                className={`bg-green-200 w-10 h-10 mr-3 ${
                  selectedColor === "green" ? "border-2 border-black" : ""
                }`}
              >
                <span
                  className={`w-10 ${
                    selectedColor === "green" ? "block" : "hidden"
                  }`}
                >
                  <img src={checksvg} alt="" />
                </span>
              </button>
              <p>Selected Fashion Color:{selectedColor}</p>
            </div>
          </div>
          <hr />
          <div className="my-4">
            <h4 className="my-4">Fashion Size</h4>
            <div className="my-4">
              <button
                onClick={() => bgStatus("L")}
                className={`border-2 border-black w-10 mx-2 b ${
                  selectedbg === "L" ? "bg-black text-white" : ""
                }`}
              >
                <span>L</span>
              </button>
              <button
                onClick={() => bgStatus("XS")}
                className={`border-2 border-black w-10 mx-2 b ${
                  selectedbg === "XS" ? "bg-black text-white" : ""
                }`}
              >
                <span>XS</span>
              </button>
              <button
                onClick={() => bgStatus("M")}
                className={`border-2 border-black w-10 mx-2 b ${
                  selectedbg === "M" ? "bg-black text-white" : ""
                }`}
              >
                <span>M</span>
              </button>
              <button
                onClick={() => bgStatus("S")}
                className={`border-2 border-black w-10 mx-2 b ${
                  selectedbg === "S" ? "bg-black text-white" : ""
                }`}
              >
                <span>S</span>
              </button>
            </div>
            <p>Selected Fashion Size:{selectedbg}</p>
          </div>
          <hr />

          <div className="my-4">
            <h4 className="my-4">Quantity</h4>
            <Button />
          </div>
          <hr />

          <div className="flex flex-col items-center mx-auto my-10">
            <button className="bg-slate-300 rounded-lg  px-8 py-2 mb-9">
              ADD TO CART
            </button>
            <div>
              <Toggle />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5 mx-10" />
      <div className="flex mx-40">
        <div className="flex-col mt-4">
          <h3 className="mb-5">Description</h3>
          <p className="mb-5 mr-72">
            The Gloria Palazzo Pants are pretty much the best pants
            ever. Dress them up or dress them down. Throw them on in lieu of a
            skirt and feel sweet freedom from the constraints of regular pants.
          </p>
          <ul>
            <p className="mb-5">Features:</p>
            <li>Elastic waistband</li>
            <li>Pull on</li>
            <li>Sits at the waist</li>
            <li>Machine wash, line dry</li>
          </ul>
        </div>
        <div className="">
          <ul className="w-80">
            <p className="mb-5">Details</p>
            <li><b>SKU</b> VP02</li>
            <li><b>Fashion Color</b> Peach</li>
            <li><b>Fashion Material</b> Polyester, Spandex</li>
            <li><b>Fashion Style</b> Wide Leg.Full Length</li>
            <li><b>Has Video</b> No</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CardProducto;
