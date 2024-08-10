import React, { useEffect, useState } from "react";
import FormLayout from "../components/FormLayout";
import { AddNotes, deleteNote, getAllNotes } from '../hooks/apihooks'
import Card from "../components/Card";
import Moviedetails from "./Moviedetails";

export default function Home() {
  const [values, setvalues] = useState({ title: "", desc: "" });
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  let getData = async ()=>{
    return await getAllNotes();
  }
  const handleSubmit = (e) => {
    setloading(false);
    if (values.desc !== "" && values.title !== "") {
      // setdata(data.concat(values));
      AddNotes(values)
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

  const handleDelete = async (id) => {
    setloading(false);
    deleteNote(id)
    setdata(await getData())
    setloading(true);
  };

  useEffect(() => {
    async function getvalues(){
      setloading(true)
      setdata(await getData())
    };

    getvalues()
  }, []);
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

  useEffect(()=>{},[data, loading])
  return (
    <div>
      <FormLayout change={handleChange} submit={handleSubmit} data={values} />
      {loading &&
        data?.map((doc, index) => (
          <Card
            key={index}
            data={doc}
            index={index}
            delete2={handleDelete}
            save={handleModify}
          />
        ))}
    </div>
  );
}
