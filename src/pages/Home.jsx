import React from "react"
import Navbar from './layout/Navbar';
function Home() {
  
    return (
      
    <div>
      <Navbar/>
      <div className="container mt-3" style={{justifyContent:"center", display:"flex"}}>
      <div className="card" style={{width: "18rem", margin: "5px"}}>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div className="text-center">
      <a href="/detailArticles" className="btn btn-primary" style={{marginRight: "2px"}}>Detail</a>
      <a className="btn btn-success" style={{marginRight: "2px"}} href="/editArticles">Edit</a>
      <button className="btn btn-danger">Hapus</button>
      </div>
    </div>
      </div>
    </div>
    </div>
          );
  }
  export default Home;