import React,{useState,useEffect} from "react"
import Navbar from './layout/Navbar';
import axios from "axios"
function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    const getArticles = async()=>{
      try{
        const res = await axios.get("http://localhost:5000/selectArticles")
        setArticles(res.data)
      }catch(err){
        console.log(err.massage)
      }
    }
    getArticles()
  },[])
  const handleHapus = async (id)=>{
    try{
      await axios.delete("http://localhost:5000/deleteArticles/"+id)
      alert("Are You Sure?")
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
    return (
      
    <div>
      <Navbar/>
      <div className="container mt-3" style={{justifyContent:"center", display:"flex"}}>
        {articles.map((art)=>(
          <div className="card" style={{width: "18rem", margin: "5px"}} key={art.id}>
          <div className="card-body">
            <h5 className="card-title">{art.judul}</h5>
            <p className="card-text">{art.konten}</p>
            <div className="text-center">
            <a className="btn btn-primary" style={{marginRight: "2px"}} href={`/detailArticles/${art.id}`} >Detail</a>
            <a className="btn btn-success" style={{marginRight: "2px"}} href={`/editArticles/${art.id}`} >Edit</a>
            <button className="btn btn-danger" onClick={()=>handleHapus(art.id)}>Hapus</button>
            </div>
          </div>
          </div>
      ))}
    </div>
    </div>
          );
  }
  export default Home;