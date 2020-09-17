import React, { useState, useEffect } from "react";

export default function RandomHouse() {
  const [randomHouse, setRandomHouse] = useState([]);

  const fetchRandomHouse = () => {
    setRandomHouse([]);
    fetch(`https://www.anapioficeandfire.com/api/houses`)
        .then((res) => res.json())
        .then((data) => {
          setRandomHouse(data);
        });
  };

  useEffect(() => {
    if (randomHouse === null) {
      fetchRandomHouse();
    }
  });

  return (
      <div>
        <header>
          <h3>Get a Home loan for your dream home</h3>
          <div>
              <button onClick={() => fetchRandomHouse()}><h4 className="title">New House Available for Loan</h4></button>
          </div>
          {randomHouse.map(value => <div>{value.name}</div>)}
        </header>
      </div>
  );
}