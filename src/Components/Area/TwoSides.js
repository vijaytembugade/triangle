import React, {useState} from "react";

const TwoSides = () => {
    const [sideA, setSideA] = useState();
    const [sideB, setSideB] = useState();
    const [angle, setAngle] = useState();
    const [area, setArea] = useState();

    function calculateArea(){
        let  calculatedArea = ((0.5)*parseFloat(sideA)*parseFloat(sideB)*Math.sin((angle*Math.PI/180))).toFixed(2)
        setArea(calculatedArea)
    }
  return (
    <div className="container-area-3">
      <div className="header">
        <h2>Enter three side of triangle and get its area</h2>
      </div>
      <div className="inputs">
        <label>Side A:</label>
        <input onChange={(e) => setSideA(e.target.value)} type="number" />
        <label>Side B:</label>
        <input onChange={(e) => setSideB(e.target.value)} type="number" />
        <label>Angle between sides:</label>
        <input max="360" onChange={(e) => setAngle(e.target.value)} type="number" />
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

export default TwoSides;
