import React  from 'react';
import Homee from './Components/Home';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Contactus from './Components/Contact';
import Reviewonce from './Components/Review';
import Searchjob from './Components/Jobsearch';
import Completed from './Components/Success';

import Jobapply from './Components/Applyjob';
import CompanyPage from './Components/CompanyPage';
import SearchPage from './Components/SearchPage';
import CompanyListPage from './Components/CompanyListPage';

import AppAboutus from './Components/Aboutus';

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import './App.css';



function App() {
  return (
    <div>

       <React.StrictMode>
         <Router>
            <Routes>
              <Route path="/" element={<Homee /> }/>
              <Route path="/signup" element={<SignUp /> }/>
              <Route path="/login" element={<Login /> }/>
              <Route path="/review" element={<Reviewonce/> }/>
              <Route path="/completed" element={<Completed /> }/>
              <Route path="/jobapply" element={<Jobapply /> }/>
              
              <Route path="/reviewonce" element={<Jobapply /> }/>
              <Route path="/searchjob" element={<Searchjob />}/>
              <Route path="/contactus" element={<Contactus /> }/>
              <Route path="/companypage" element={<CompanyPage />} />
              <Route path="/searchpage" element={<SearchPage />} />
              <Route path="/companylistpage" element={<CompanyListPage />} />
              <Route path="/about" element={<AppAboutus />} />



            </Routes> 

       
          </Router>
        </React.StrictMode>
   </div>
  );
}

export default App;