import React, { useState } from "react";
// we will be using event handling here
// when i type in my name it will display after Hello
function App() {
  const [name, typedName] = useState("");
  function getValue(event) {
    typedName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={getValue}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
