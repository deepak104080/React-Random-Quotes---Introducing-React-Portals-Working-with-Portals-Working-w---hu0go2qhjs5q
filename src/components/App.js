import React, { useEffect, useState } from "react";

import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {

  const [data, setData] = useState({});
  const [bg, setBg] = useState('');

  const getdata = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const result = await res.json();
    
    let tempColor = colors[Math.floor(Math.random()*colors.length)];
    // setBg(tempColor);
    document.body.style = `background: ${tempColor};`;
    setData(result);
  }

  useEffect(() => {
    getdata();
  }, [])

  return (
    <div id="main">
      <div id="wrapper">
          <div >
              <div className="quote-text">{data.content}</div>
              <div className="quote-author">{data.author} </div>
          </div>
        <button id="new-quote" onClick={getdata}>Click</button>
      </div>
    </div>
  );
};

export default App;