import React, { useState } from "react";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Todo from "./pages/todo.jsx";
import "./styles/styles.css";

export default function App() {
  let [page, setPage] = useState("Home");
  let [left, setLeft] = useState("ABOUT");
  let [right, setRight] = useState("TODO");

  function handleLeftClick() {
    if(page === 'Home'){
      setPage('About');
      setLeft('HOME');
      setRight('TODO');
    } else if(page === 'About'){
      setPage('Home');
      setLeft('ABOUT');
      setRight('TODO');
    } else if(page === 'Todo'){
      setPage('About');
      setLeft('HOME');
      setRight('TODO');
    }
  }

  function handleRightClick() {
    if(page === 'Home'){
      setPage('Todo');
      setLeft('ABOUT');
      setRight('HOME');
    } else if(page === 'About'){
      setPage('Todo');
      setLeft('ABOUT');
      setRight('HOME');
    } else if(page === 'Todo'){
      setPage('Home');
      setLeft('ABOUT');
      setRight('TODO');
    }
  }

  return (
    <>
      <a className="left" onClick={handleLeftClick}>
        {left}
      </a>
      <a className="right" onClick={handleRightClick}>
        {right}
      </a>
      {page === "Home" && <Home />}
      {page === "About" && <About />}
      {page === "Todo" && <Todo />}
    </>
  );
}
