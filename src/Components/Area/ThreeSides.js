import React, { useState } from "react";

const ThreeSides = () => {
  const [sideA, setSideA] = useState();
  const [sideB, setSideB] = useState();
  const [sideC, setSideC] = useState();
  const [area, setArea] = useState();

  function calculateArea() {
    let s = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

    let calculatedArea = Math.sqrt(
      s * (s - sideA) * (s - sideB) * (s - sideC)
    ).toFixed(2);

    setArea(calculatedArea);
  }
  return (
    <div className="container-area-2">
      <div className="header">
        <h2>Enter three side of triangle and get its area</h2>
      </div>
      <div className="inputs">
        <label>Side A:</label>
        <input onChange={(e) => setSideA(e.target.value)} type="number" />
        <label>Side B:</label>
        <input onChange={(e) => setSideB(e.target.value)} type="number" />
        <label>Side C:</label>
        <input onChange={(e) => setSideC(e.target.value)} type="number" />
      </div>
      <div className="calculate">
        <button onClick={calculateArea}>Calculate</button>
      </div>
      {area && (
        <div>
          <h2>Area of Triangle is : {area}</h2>
        </div>
      )}
    </div>
  );
};

export default ThreeSides;
