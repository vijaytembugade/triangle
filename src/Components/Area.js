import React from "react";
import {useHistory } from "react-router-dom";

const Area = () => {
  const history = useHistory();
  return (
    <div className="container-area">
      <h2>Select from below</h2>
      <div onClick={()=>history.push("/area/heightandbase")}>If you have height and base</div>
      <div onClick={()=>history.push("/area/threesides")}>If you have all three side</div>
      <div onClick={()=>history.push("/area/twosideandangle")}>If you have two side and one angle</div>
    </div>
  );
};

export default Area;
