import React from 'react';
import { Link } from 'react-router-dom';



const AppHeader=()=>{
  return (
<div><nav class="navbar navbar-expand-lg navbar-light bg-light">
 <Link class="navbar-brand" to="/">DEVBRIDGE</Link>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>

 <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul class="navbar-nav mr-auto">
     <li class="nav-item active">
       <Link class="nav-link" to="/about">Home <span class="sr-only"></span></Link>
     </li>
     <li class="nav-item">
       <Link class="nav-link" to="/login">Login/SignUp</Link>
     </li>
     <li class="nav-item">
       <Link class="nav-link" to="/searchpage">Find Job</Link>
     </li>
     <li class="nav-item">
       <Link class="nav-link" to="/companylistpage">Hire</Link>
     </li>
     
   </ul>
   
 </div>
</nav></div>);}


export default AppHeader;
