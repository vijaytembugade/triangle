import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      que: "How many sides are there in triangle",
      options: [2, 3, 1, 4],
      ans: 3,
      id: 0,
    },
    {
      que: "If two angles of triangle are 60 and 60 degree, then what will be third angle?",
      options: [35 , 60, 65, 90],
      ans: 60,
      id: 1,
    },
    {
      que: "A triangle with one angle greater than 90 degrees called?",
      options: ["equilateral triangle", "obtuse triangle", "acute triangle", "isosceles triangle"],
      ans: "obtuse triangle",
      id: 2,
    },
    {
      que: "A triangle having at least two equal sides called?",
      options: ["equilateral triangle", " obtuse triangle", "acute triangle", "isosceles triangle"],
      ans: "isosceles triangle",
      id: 3,
    },
    {
      que: "A triangle with one angle equal to 90 degrees called?",
      options: ["equilateral triangle", " obtuse triangle", "right triangle", "isosceles triangle"],
      ans: "right triangle",
      id: 4,
    },
    {
      que: "In right triangle, the side opposite to right angle is called?",
      options: ["altitude", "hypotenuse", "angle bisector"],
      ans: "hypotenuse",
      id: 5,
    },
    {
      que: "In equilateral triangle, all three angles are equal?",
      options: ["True", "False", "Don't know"],
      ans: "True",
      id: 6,
    },
    {
      que: "The perimeter of a equilateral triangle is 15cm. What is the length of one side?",
      options: [2, 5, 15, 3],
      ans: 5,
      id: 7,
    },
  ];
  const [score, setScore] = useState();
  const [arr , setArr] = useState({})
  // let arr = {}
  let sum = 0;
  function selectedOption(e){
    // console.log(questions[e.target.name].ans);
    setArr({ ...arr, ...{[e.target.name] : e.target.value} }) 
    // console.log(arr)
  };

  function calculateScore() {
    questions.forEach(element => {
      console.log(arr[element.id])
      console.log(element.ans)
      if(arr[element.id] ==element.ans){
        sum = sum+1
      }

      setScore(sum)
    });
    

    
  }

  return (
    <div className="container-quiz ">
      <div className="scroll">
      {questions.map((q) => {
        return (
          <>
            <p>{q.que}</p>
            {q.options.map((option, i) => {
              return (
                <>
                  <input
                    className="quiz-input"
                    onChange={selectedOption}
                    name={q.id}
                    id={q.id + option}
                    type="radio"
                    value={option}
                  />
                  <label for={q.id + option}>
                  {option}
                  </label>
                </>
              );
            })}
          </>
        );
      })}

      <div>
      <button onClick={calculateScore}>Submit</button>
      </div>
      </div>
      

      {score && <h2>Your score is {score}/8</h2>}
    </div>
  );
};

export default Quiz;
