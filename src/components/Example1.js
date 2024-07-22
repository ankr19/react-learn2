import React from "react";

export default function Example1() {
  const [color, setcolor] = React.useState("red");

  const [text, settext] = React.useState("");

  const handleClick = () => {
    if (color == "red") {
      setcolor("blue");
    } else {
      setcolor("red");
    }
  };
  return (
    <div>
      <div className="">
        <button
          className=""
          style={{ color: "white", backgroundColor: color }}
          onClick={() => {
            handleClick();
          }}
        >
          Click
        </button>
      </div>

      <div className="">
        <input
          name="text"
          id="text"
          type="text"
          className="form-text"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        {text}
        text
      </div>
    </div>
  );
}
