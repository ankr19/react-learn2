import React from "react";
import FormLayout from "./FormLayout";

export default function Modal({data, change, save}) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
      </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button onClick={save} type="button" className="btn btn-primary" data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
