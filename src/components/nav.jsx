import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:'white',textDecoration:'none'}} >
    <img  src="/react-recipe-finder/hamburger.svg" alt="" width="30" height="24"/>
      RecipeRise</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" style={{margin:'20px'}}>
        <Link style={{color:'white',textDecoration:'none'}} to="/">Main</Link>
        </li>
        <li class="nav-item"  style={{margin:'20px'}}>
        <Link style={{color:'white',textDecoration:'none'}} to="about">About</Link>
        </li>
       
        <li class="nav-item"  style={{margin:'20px'}}>
     <Link style={{color:'white',textDecoration:'none'}} to="contact">Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        {/* <li className="li"><Link style={{color:'black',textDecoration:'none'}} to="/">Main</Link></li>  
  
       <ul className="ul">
         <li className="li"> <Link style={{color:'black',textDecoration:'none'}} to="about">About</Link></li></ul>
         <ul className="ul">
    <li className="li"><Link style={{color:'black',textDecoration:'none'}} to="contact">Contact</Link></li>  
    </ul> */}
    </div>
  )
}
