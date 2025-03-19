import React, { useState } from "react";


export default function Home() {
  const [variableNameHere, setVariableNameHere] = useState("variableValueHere");


  return (
    <>
      <h1 className="title">QUICK LIST</h1>
      <h1 id="uglyLine">____________</h1>
      <div class="container">
        <h2>A PLACE FOR THINK FAST IDEAS</h2>
      </div>
      <img class="img" width="230" src="https://cdn.glitch.global/1c9af2bc-8a29-4da0-90d0-aaf9f84613e6/Todo%20Icon.svg?v=1683774825422"></img>
      
    </>
  );
}
