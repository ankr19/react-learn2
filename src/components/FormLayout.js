import React from "react";

export default function FormLayout({change, submit, data}) {
  return (
    <div>
      <form class="row g-3" onSubmit={(e)=>{e.preventDefault();}}>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="title" name="title" onChange={change} value={data?.title} />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Description
          </label>
          <input type="text" class="form-control" id="desc" name="desc" value={data?.desc} onChange={change} />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onClick={()=>{submit()}}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
