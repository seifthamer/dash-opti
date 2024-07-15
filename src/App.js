import React from 'react';
import './App.css';
 import Sidebar from './sidebar/sidebar.jsx';
 import LoginPage from './loginpage/loginpage.jsx';
 import Dashadmin from './dashadmin/dashadmin.jsx';
 import Etudiant from './etudiant/etudiant.jsx';
import Formateur from './formateurs/formateur.jsx';
import Courses from './courses/courses.jsx';
import Billing from './billing/billing.jsx';
import Blog from './blog/blog.jsx';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Cookies from "js-cookie"







function App() {
  const token = Cookies.get('token');
  if(!token){
    return (
        <div className="app">
            <Router>
             
              <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/' element={<div className="app1"><Sidebar/><Dashadmin/></div>}/>
                <Route path='/etudiant' element={<div className="app1"><Sidebar/><Etudiant/></div>}/>
                <Route path='/formateur' element={<div className="app1"><Sidebar/><Formateur/></div>}/>
                <Route path='/courses' element={<div className="app1"><Sidebar/><Courses/></div>}/>
                <Route path='/billing' element={<div className="app1"><Sidebar/><Billing/></div>}/>
                <Route path='/blog' element={<div className="app1"><Sidebar/><Blog/></div>}/>

              </Routes>
            </Router>
          





        </div>
      );


   
    }else{
      return(
        <div className="g-sidenav-show  bg-gray-100">
          <LoginPage/>
        </div>
      )
    }

    }
  
  export default App;



  