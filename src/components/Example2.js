import React from "react";
import Button from "./Button";
import InputValue from "./InputValue";

export default function Example2() {
  //
  const [data, setdata] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    console.log("value name ", e.target.name);
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log("object value - ", data);
  };
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputValue
          labelname={"Email address"}
          type={"email"}
          name={"email"}
          placeholder={"Please Enter you email"}
          handle={handleChange}
          value={data.email}
        />
        {/* <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={(e)=>{handleChange(e)}}
            value={data.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div> */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => {
              handleChange(e);
            }}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <Button
          name={"Submit"}
          class1={"btn-outline-primary"}
          handle={handleClick}
        />
        {/* <button type="submit" className="btn btn-primary" onClick={()=>{handleClick()}}>
          Submit
        </button> */}
      </form>

      
    </div>
  );
}
