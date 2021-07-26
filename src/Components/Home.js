import React from "react";
import { useHistory } from "react-router-dom";


const Home = () => {
  const history = useHistory();
  return (
      <div className="container">
      <h2 className="heading">Welcome to Triangle Fun </h2>
        <div onClick={() => history.push("/angles")}>Angle of Triangle</div>
        <div onClick={() => history.push("/hypotanouse")}>Check Hypotenouse</div>
        <div onClick={() => history.push("/area")}>Calculate Area</div>
        <div onClick={() => history.push("/quiz")}>Take a Quiz of Triangle</div>
      </div>
  );
};

export default Home;
