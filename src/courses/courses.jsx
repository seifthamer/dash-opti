import React, { useContext, useEffect, useState } from 'react';
import "./courses.css"
import Swal from 'sweetalert2'
import axios from 'axios';
import Cookies from 'js-cookie';
import AuthContext from '../Context/AuthContext';

const Courses = (props) => {
const state = useContext(AuthContext);
const data = state.CoursApi;
const token = Cookies.get('token');


const removeUser = async(id)=>{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      try{
        const res = axios.delete(`http://localhost:5000/course/delete/${id}` , {headers:{Authorization : `bearer ${token}`}});
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then((result)=>{
        if (result.isConfirmed) {
          console.log('Action after "OK" in the alert');
          window.location.reload(); // Example action: reload the page
        }
      })
      
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
 }

  return (
    <div className="courses">
      <div className="courses-container">
        <h2>Courses Table</h2>
        <table className="courses-table">

          <thead>
            <tr>
              <th>NAME</th>
              <th> NbOfSelling</th>
              <th>CATEGORY</th>
              <th className="btn-add3">delete</th> 
            </tr>
          </thead>

          <tbody>
          {data?.map((item)=>{
          return (
            <tr  key={item._id}>
              <td data-label="NAME" className='titles'>
                <img src="./images/xd.svg" alt="XD Logo" className="course-logo"/>
                <div className="course-text">
                  <p className="course-name">{item.name}</p>
                </div>
              </td>
              <td data-label="MEMBERS" className="member-icons">
              {item.nbreOfSelling}
              </td>
              <td data-label="CATEGORY">{item.category}</td>
              <td data-label="Actions">
                <div className="course-actions">
                  <a href="#"><img src="./images/delete.svg" alt="Delete" onClick={()=>{removeUser(item._id)}} className="trash-icon3"/></a>
                </div>
              </td>
            </tr>
            );
          })} 
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Courses;
