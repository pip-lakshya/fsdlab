import React, { useState } from "react";

function App() {
  // 1. State declare
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  // 2. Input change handle
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // 3. Add item
  const handleAdd = () => {
    if (name.trim() === "") return;

    setList([...list, name]); // add to array
    setName(""); // clear input
  };

  // 4. Delete item
  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello Welcome to React</h1>
      <h3>To-do list</h3>

      {/* Input field */}
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter something"
      />

      {/* Button */}
      <button onClick={handleAdd}>Add</button>

      {/* List rendering */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;