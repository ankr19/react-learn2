import React, { useEffect, useState } from "react";
import FormLayout from "../components/FormLayout";
import Card from "../components/Card";
import Moviedetails from "./Moviedetails";

export default function Home() {
  const [values, setvalues] = useState({ title: "", desc: "" });
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const handleSubmit = (e) => {
    setloading(false);
    if (values.desc !== "" && values.title !== "") {
      setdata(data.concat(values));
      setvalues({ title: "", desc: "" });
      console.log(data);
      setloading(true);
    }
  };

  const handleChange = (e) => {
    // let obj = {};
    // console.log({ [e.target.name]: e.target.value });
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleDelete = (index) => {
    setloading(false);
    let da2 = data;
    console.log(index);
    da2.splice(index, 1);
    setdata(da2);
    setloading(true);
    // let da = delete data[index]
    // console.log(da)
  };

  useEffect(() => {}, [data, values, loading]);
  const handleModify = (d, pos) => {
    setdata(
      data.map((obj, index) => {
        if (index === pos) {
          return { ...obj, title: d.title, desc: d.desc };
        }
        return obj;
      })
    );
  };
  return (
    <div>
      <FormLayout change={handleChange} submit={handleSubmit} data={values} />
      {loading &&
        data.map((doc, index) => (
          <Card
            key={index}
            data={doc}
            index={index}
            delete2={handleDelete}
            save={handleModify}
          />
        ))}
        <Moviedetails />
    </div>
  );
}
