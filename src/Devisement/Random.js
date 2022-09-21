import React, {useState} from "react";

function Random() {
    const [sampleNumber, setSampleNumber] = useState(null);

    const getRandomNumber = () => {
        let min = 1000;
        let max = 9999;
        setSampleNumber(Math.round(Math.random() * (max - min) + min))
    }

    return (
        <div className="Random">
            <h1>{`Genrate random number on click of the button`}</h1>
            <button onClick={() => getRandomNumber()}>{'Genrate'}</button>
            <p>{sampleNumber}</p>
        </div>
    );
}

export default Random;