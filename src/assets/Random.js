import React, { useState } from "react";

function Random() {
  const [sampleNumber, setSampleNumber] = useState(null);

  const getRandomNumber = () => {
    let min = 1000;
    let max = 9999;
    setSampleNumber(Math.round(Math.random() * (max - min) + min));
  };

  return (
    <div className="Random py-5">
      <h1>{`응모 번호`}</h1>
      <button onClick={() => getRandomNumber()}>{"추첨 하기"}</button>
      <p>{sampleNumber}</p>
    </div>
  );
}

export default Random;
