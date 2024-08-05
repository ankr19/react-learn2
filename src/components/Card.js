import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

export default function Card({ data, delete2, index, save }) {
  const ref = useRef(null)
  const [cdata, setcdata] = useState({data});
  const handleChange = (e) => {
    setcdata({ ...cdata, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    // setdata({ title: title, desc: desc });
  }, []);
  const handleSubmit = () => {
    // console.log(data)
    save(cdata, index);
  };
  return (
    <div className="d-flex flex-row align-items-center gap-3">
      <div>{data?.title}</div>
      <div>{data?.desc}</div>
      <div>
        <button
          onClick={() => {
            delete2(index);
          }}
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <div>
        {/* <!-- Button trigger modal --> */}
        {/* <button >
  Launch demo modal
</button> */}
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="bi bi-pencil"></i>
        </button>
        <Modal ref={ref} data={cdata} change={handleChange} save={handleSubmit} />
      </div>
    </div>
  );
}
