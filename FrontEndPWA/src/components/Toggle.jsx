import React, { useState } from "react";


function Toggle() {
  const [toggle, setToggle] = useState(0);
  return (
    <div>
      <button className="flex" onClick={() => {
        if(toggle == 1){
          setToggle(toggle-1)
        }else{
          setToggle(1)
        }
      }}>{toggle == 0 ?'🖤' : '❤️'}<p >Add to Favorite</p></button>
    </div>
  );
}

export default Toggle;
