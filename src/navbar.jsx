// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import './navbar.css'
import ss from './logo192.png';

export default function navbar() {
  return (
    <div>
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container">
    <div className='d-flex gap-4'>
  <img src={ss} width={60}></img>
  <div class="navbar-brand my-2" style={{fontSize:"1.5rem"}}>Offcanvas dark navbar</div>
  </div>
  <div className='text-white d-none d-lg-block'>
   
        <div className=''>
    <div className='d-flex hello'>
       <div>
        hello
       </div>
       <div>
        hello
       </div>
       <div>
        hello
       </div>
      
       <span className='vr'>

       </span>
       
      
       <div>
        hello
       </div>
       <div>
        hello
       </div>
      
       <span className='vr'>

       </span>
       
      
       <div>
        hello
       </div>
    </div>
      </div>
  
  </div>
     <div className='menu_desktop d-none d-lg-block bg-primary'>
        <div class="" type="button" 
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
     <div className='text-white'>"desktop"</div>
    </div>
        <div>
     
    </div>
     </div>
     <div className='menu_mobile d-lg-none'>
    

    <span class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
     <div className='text-white'>"mobile"</div>
    </span>
    </div>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
    
        <div className='mobile d-lg-none'>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">mobile</a>
          </li>
         
        </ul>
        </div>

        <div className='desktop d-none d-lg-block'>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 mx-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">desktop</a>
          </li>
         
        </ul>
        </div>

      </div>
    </div>
  </div>
</nav>
</div>
  )
}

// const styles = StyleSheet.create({})