import React, { useState } from "react";
const Angles = () => {
  const [angle1, setAngle1] = useState();
  const [angle2, setAngle2] = useState();
  const [angle3, setAngle3] = useState();
  let [sum, setSum] = useState();

  const ShowTriangle = () => {
    
    if (sum === 180) {
      return <h2>Given angles can make triangle</h2>;
    } else {
      return <h2> Given Angles cannot make any Triangle. </h2>;
    }
    
  };

  return (
    <div>
      <div className="container-angle">
        <div class="heading-angle">
          Enter the Three Angles of Triagle
        </div>
        <div>
          <input
            onChange={(e) => setAngle1(e.target.value)}
            type="number"
          ></input>
          <input
            onChange={(e) => setAngle2(e.target.value)}
            type="number"
          ></input>
          <input
            onChange={(e) => setAngle3(e.target.value)}
            type="number"
          ></input>
        </div>
        <div>
          <button
            onClick={() =>
              setSum(parseInt(angle1) + parseInt(angle2) + parseInt(angle3))
            }
          >
            Click
          </button>
        </div>
        <div>{sum && <ShowTriangle />}</div>
      </div>
    </div>
  );
};

export default Angles;
