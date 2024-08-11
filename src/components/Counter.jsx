import React, { useEffect, useState } from "react";

function Counter() {
  const [variable, setVariable] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    document.title = variable;
  }, [variable]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setVariable((prev) => prev + 1);
          }}
        >
          Increment
        </button>
        {variable}
        <button
          onClick={() => {
            setVariable((prev) => prev - 1);
          }}
        >
          Decrement
        </button>
      </div>

      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </div>
  );
}

export default Counter;
