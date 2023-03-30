import React from 'react'
import Navbar from './layout/Navbar'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function DetailArticles() {
  const location = useLocation()
  const articlesId = location.pathname.split("/")[2]
  const [articles, setArticles] = useState([])
useEffect(()=>{
  const getArticles = async()=>{
    try{
      const res = await axios.get("http://localhost:5000/detailArticles/"+articlesId)
      setArticles(res.data)
    }catch(err){
      console.log(err)
    }
  }
  getArticles()
},[])
  return (
    <div>
        <Navbar/>
        <div className='container mt-3'>
          <div>
            <h2 style={{textAlign:"center"}}>Detail Artikel</h2>
          </div>
          {articles.map((art)=>(
            <div class="card">
            <h5 class="card-header">{art.judul}</h5>
            <div class="card-body">
                <p class="card-text">{art.konten}</p>
                
            </div>
            </div>
          ))} 
        </div>
    </div>
  )
}
