import React from "react"
import Navbar from "./layout/Navbar";

function EditArticles() {
    return (
      <div>
        <Navbar/>
        <div className="container mt-3">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Judul</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Judul Artikel Anda"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Content</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Isi Content Anda"></textarea>
        </div>
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
        </div>
      </div>
    );
  }
  export default EditArticles;