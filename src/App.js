import React from "react";
import NumberBall from "./NumberBall";
import _ from "lodash";

function App() {
  const colors = ["blue", "green", "red", "pink", "purple", "black"];
  const recommendNumbers = _.chain(1).range(46).sampleSize(6).sortBy().value();
  
  return (
    <div>
      {recommendNumbers.map((value, index) => (
        <NumberBall color={colors[index]} key={index}>
          {value}
        </NumberBall>
      ))}
    </div>
  );
}

export default App;
