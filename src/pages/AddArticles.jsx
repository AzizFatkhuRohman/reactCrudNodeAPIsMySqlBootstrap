import React from 'react'
import Navbar from './layout/Navbar';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Add() {
    const navigate = useNavigate()
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
            await axios.post("http://localhost:5000/insertArticles", articles)
            alert("Create Success")
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Judul</label>
        <input onChange={handleChange} name='judul' type="text" className="form-control" id="exampleFormControlInput1" placeholder="ini judul"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Content</label>
        <textarea onChange={handleChange} name='konten' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div>
        <button onClick={handleClick} className='btn btn-primary'>Submit</button>
      </div>
    </div>
    </div>

  )
}
