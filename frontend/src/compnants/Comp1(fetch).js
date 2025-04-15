import React, { useState } from "react";

function Comp1() {
  const [arr, setArr] = useState([]);

  const fun1 = () => {
    fetch("/api/Students")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArr(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <p>hi from comp 1</p>
      <button onClick={fun1}>fetch</button>
      <ul>
        {arr.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </>
  );
}
export default Comp1;
