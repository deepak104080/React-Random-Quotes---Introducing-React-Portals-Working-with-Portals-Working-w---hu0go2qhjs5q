// import React, { useEffect } from "react";
// import "../styles/App.css";

// var colors = [
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857'
// ];



// const App = () => {

//   const [quote, setQuote] = useState({});

//     const callApi = async() => {
//         const response = await fetch('https://api.quotable.io/random')
//         const data = await response.json();
//         console.log(data);
//         setQuote(data);
//     }

//     useEffect(() => {
//         callApi()
//     }, [])

//     return (
//       <div id="main">
//         <div id="wrapper">
//           <h2>iawuegfiuawgeifugqwieuf</h2>
//             <div className="quote-text">{quote.content}</div>
//             <div className="quote-author">{quote.author}</div>
//         </div>
//       </div>
//     );
// };

// export default App;




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
    setBg(tempColor);
    setData(result);
  }

  function next() {
    getdata();
    //console.log(data)
  }

  useEffect(() => {
    // getdata();
    console.log(data)
  }, [data])

  return (
    <div id="main">
      <div id="wrapper" style={{backgroundColor: bg}}>
          <div >
              <div className="quote-text">{data.content}</div>
              <div className="quote-author">{data.author} </div>
          </div>
        <button id="new-quote" onClick={next}>Click</button>
      </div>
    </div>
  );
};

export default App;