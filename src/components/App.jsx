import React, { useState } from "react";
// we will be using event handling here
// when i type in my name it will display after Hello

// next we are going to make the name to 
// only appear when the submit button is clicked on
function App() {
  const [name, typedName] = useState("");
  const [headingtext, submittedName] = useState("");
  function getValue(event) {
    typedName(event.target.value);
  }
  function submitName(){
      submittedName(name)
      alert("your name is" + name)
      typedName('')
  }
  return (
    <div className="container">
      <h1>Hello {headingtext}</h1>
      <input
        onChange={getValue}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={submitName}>Submit</button>
    </div>
  );
}

export default App;
