import React, {useState} from "react";

const Hypotanouse = () => {

    const [sideA , setSiteA] = useState()
    const [sideB , setSiteB] = useState()
    const [showHypo, setHypo] = useState()

    function handleClick(){
        setHypo(Math.sqrt((sideA*sideA)+(sideB*sideB)).toFixed(2))
    }

  return (
    <div className="container-hypo">
        <h2>Enter the length of sides of right angle triangle</h2>
        <p>Side A</p>
        <input step="any" min="0" onChange={(e)=>setSiteA(e.target.value)} type="number"></input>
        <p>Side B</p>
        <input step="any" min="0" onChange={(e)=>setSiteB(e.target.value)} type="number"></input>

        <button onClick={handleClick}>Click</button>

        {showHypo && <h1>Hypotanous is : {showHypo}</h1>}
      
    </div>
  );
};

export default Hypotanouse;
