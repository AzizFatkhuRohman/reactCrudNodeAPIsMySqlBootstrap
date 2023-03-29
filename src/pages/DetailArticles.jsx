import React from 'react'
import Navbar from './layout/Navbar'

export default function DetailArticles() {
  return (
    <div>
        <Navbar/>
        <div className='container mt-3'>
        <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            
        </div>
        </div>
        </div>
    </div>
  )
}
