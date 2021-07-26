import React, { useState } from "react";

const Quiz = () => {
  const [question1, setQuestion1] = useState();
  const [question2, setQuestion2] = useState();
  const [question3, setQuestion3] = useState();
  const [score, setScore] = useState(0);

  function calculateScore() {
    let s = 0;
    if (question1 === "3") {
      s += 1;
      setScore(s);
    } else {
      setScore(score);
    }
    if (question2 === "sum of angle is 60 degree") {
      s += 1;
      setScore(s);
    } else {
      setScore(score);
    }
    if (question3 === "3") {
      s += 1;
      setScore(s);
    } else {
      setScore(score);
    }
  }

  return (
    <div className="container-quiz">
      <p>How many side are there in triagle?</p>
      <div onChange={(e) => setQuestion1(e.target.value)}>
        <input name="question1" type="radio" value="4" />
        4
        <input name="question1" type="radio" value="6" />
        6
        <input name="question1" type="radio" value="3" />3
      </div>

      <p>What is wrong about triangle?</p>
      <div onChange={(e) => setQuestion2(e.target.value)}>
        <input
          name="question2"
          type="radio"
          value="sum of angle is 60 degree"
        />
        sum of angle is 60
        <br />
        <input
          name="question2"
          type="radio"
          value="sum of angles is 180 degree"
        />
        sum of angles is 180
        <br />
        <input
          name="question2"
          type="radio"
          value="equilataral triangle has angle 60 degree"
        />
        equilataral triangle has angle 60
      </div>

      <p>Which of following is not a triangle related theaorem?</p>
      <div onChange={(e) => setQuestion3(e.target.value)}>
        <input name="question3" type="radio" value="1" />
        Pythagorus Theorem
        <br />
        <input name="question3" type="radio" value="2" />
        Basic preporationality Theorem
        <br />
        <input name="question3" type="radio" value="3" />
        Cyclic Qadrilateral Theorem
        <br />
      </div>

      <button onClick={calculateScore}>Submit</button>

     {score && <h2>Your score is {score}</h2>}
    </div>
  );
};

export default Quiz;
