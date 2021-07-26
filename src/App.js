import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Angles from "./Components/Angles";
import Home from "./Components/Home";
import Hypotanouse from "./Components/Hypotanouse";
import Area from "./Components/Area";
import Quiz from "./Components/Quiz";
import "./Styles/homeStyles.css";

import HeightAndBase from "./Components/Area/HeightAndBase";
import ThreeSides from "./Components/Area/ThreeSides";
import TwoSides from "./Components/Area/TwoSides";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/angles">
          <Angles />
        </Route>
        <Route exact path="/hypotanouse">
          <Hypotanouse />
        </Route>
        <Route exact path="/area">
          <Area />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
        <Route exact path="/area/heightandbase">
            <HeightAndBase/>
        </Route>
        <Route exact path="/area/threesides">
          <ThreeSides/>
        </Route>
        <Route exact path="/area/twosideandangle">
          <TwoSides/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
