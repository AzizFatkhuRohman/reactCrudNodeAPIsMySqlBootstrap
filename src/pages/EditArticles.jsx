import React from 'react'
import Navbar from './layout/Navbar';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function EditArticles() {
  const navigate = useNavigate()
  const location = useLocation()
  const articlesId = location.pathname.split("/")[2]
  const [articles, setArticles] = useState({
    judul:"",
    konten:"",
})
const handleChange = (e)=>{
    setArticles(prev=>({...prev, [e.target.name]: e.target.value}))
}
const handleClick = async (e)=>{
    e.preventDefault()
    try{
        await axios.put("http://localhost:5000/updateArticles/"+ articlesId, articles)
        alert("Upadte Success")
        navigate("/")
    }catch(err){
        console.log(err)
    }
}
const [getArt, setArt] = useState([])
useEffect(()=>{
  const getArticles = async()=>{
    try{
      const res = await axios.get("http://localhost:5000/detailArticles/"+articlesId)
      setArt(res.data)
    }catch(err){
      console.log(err.massage)
    }
  }
  getArticles()
},[])
    return (
      <div>
      <Navbar/>
      <div className='container'>
      <div>
            <h2 style={{textAlign:"center"}}>Edit Artikel</h2>
          </div>
        {getArt.map((art)=>(
          <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Judul</label>
          <input onChange={handleChange} name='judul' type="text" className="form-control" id="exampleFormControlInput1" placeholder={art.judul}/>
        </div>
        
        ))}
        {getArt.map((art)=>(
          <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Content</label>
          <textarea onChange={handleChange} name='konten' className="form-control" id="exampleFormControlTextarea1" placeholder={art.konten} rows="3"></textarea>
        </div>
        ))}
      
      <div>
        <button onClick={handleClick} className='btn btn-primary'>Submit</button>
      </div>
    </div>
    </div>
    );
  }
  export default EditArticles;