import React, { useState } from "react";


export default function Home() {
  const [variableNameHere, setVariableNameHere] = useState("variableValueHere");


  return (
    <>
      <h1 className="title">ABOUT US</h1>
      <h1 id="uglyLine">____________</h1>
      <div class="containerAbout">
        <h2>WE ARE A TEAM OF ONE PERSON DEDICATED TO HELPING YOU WITH KEEPING TRACK OF YOUR TASKS.</h2>
      </div>
      
    </>
  );
}