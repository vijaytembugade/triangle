import React, { useState } from "react";

const HeightAndBase = () => {
  const [height, setHeight] = useState();
  const [base, setBase] = useState();
  const [area, setArea] = useState();

  function handleAreaCalculate() {
    let calculatedArea = parseFloat(height) * parseFloat(base);
    setArea(calculatedArea);
  }

  return (
    <div className="container-area-1">
      <div class="header">
        <h2>Enter the height and Base of Triangle</h2>
      </div>
      
      <div>
        <label>Height</label>
        <br />
        <input
          onChange={(e) => setHeight(e.target.value)}
          text="number"
        ></input>
      </div>
      <div className="lineBreak">
        <label>Base</label>
        <br />
        <input onChange={(e) => setBase(e.target.value)} text="number"></input>
      </div>
     
      <div className="button">
        <button onClick={handleAreaCalculate}>Calculate</button>
      </div>

      {area && (
        <div >
          <h2>Your Area is : {area}</h2>
        </div>
      )}
    </div>
  );
};

export default HeightAndBase;
