import React from "react";

const Example3 = () => {
  const color = ["red", "blue", "green"];

  const handleChange = (e) => {
    console.log(e.target.name,"->",e.target.value)
  }

  const getdata = async ()=>{
    let data = await fetch("https://api.restful-api.dev/objects")
    console.log(data);
  }

  React.useEffect(()=>{
    getdata()
  },[])

  return (
    <div className="col-3 mt-2 mx-auto">
      <select name="color" onChange={(e)=>{handleChange(e)}} className="form-select" aria-label="Default select example">
        <option defaultValue>Open this select menu</option>
        {color.map((doc) => (
          <option key={doc} value={doc}>
            {doc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Example3;
