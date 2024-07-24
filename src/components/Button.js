import React from "react";

export default function Button({class1, handle, name}) {
  return (
    <button
      className={`btn ${class1}`}
      onClick={() => {
        handle();
      }}
    >
      {name}
    </button>
  );
}
