import React from "react";

export default function InputValue(props) {
  return (
    <div class="mb-3">
      <label htmlFor="" class="form-label">
        {props.labelname}
      </label>
      <input
        name={props.name}
        type={props.type}
        class="form-control"
        id="exampleFormControlInput1"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e)=>props.handle(e)}
      />
    </div>
  );
}
