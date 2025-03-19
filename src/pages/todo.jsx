import React, { useState, useEffect } from "react";

export default function Home() {
  const [itemList, setItemList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("itemList");
    if (storedItems) {
      setItemList(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);

  function addEmptyItem() {
    const newItem = inputValue.toUpperCase();
    if (newItem !== "") {
      const newItemObj = {
        id: Date.now(),
        text: newItem,
      };
      setItemList([...itemList, newItemObj]);
    }
    setInputValue("");
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addEmptyItem();
    }
  }

  function deleteItem(itemId) {
    const updatedItemList = itemList.filter((item) => item.id !== itemId);
    setItemList(updatedItemList);
  }

  function formatText(text) {
    const words = text.split(" ");
    const truncatedWords = words.map((word) => {
      if (word.length >= 12) {
        return word.substring(0, 11) + "...";
      }
      return word;
    });
    return truncatedWords.join(" ");
  }

  return (
    <>
      <h1 className="title">TODO</h1>
      <h1 id="uglyLine">____________</h1>
      <div className="allTodoItems">
        {itemList.map((item) => (
          <div key={item.id} className="todoItem">
            <button
              className="todoDelete btn"
              onClick={() => deleteItem(item.id)}
            >
              X
            </button>
            <p className="todoText">{formatText(item.text)}</p>
          </div>
        ))}
      </div>

      <div className="addBar">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="addItem" onClick={addEmptyItem}>
          +
        </button>
      </div>
    </>
  );
}


