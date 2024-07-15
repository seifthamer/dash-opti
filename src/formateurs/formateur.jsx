import React, { useContext, useEffect, useState } from 'react';
import "./formateur.css";
import Swal from 'sweetalert2'
import axios from 'axios';
import Cookies from 'js-cookie';
import AuthContext from '../Context/AuthContext';


const Formateur = (props) => {
  const token = Cookies.get("token");
  const state = useContext(AuthContext);
  const data2 = state.FormateurApi;
  const { user } = props; 

  const [data1, setData1] = useState({
    username: user ? user.username : '',
    password: user ? user.password : '',
    email: user ? user.email : ''
  });
  
  const [newuser, setNewuser] = useState({
    username: user ? user.username : '',
    password: user ? user.password : '',
    email: user ? user.email : ''
  });

  const blockUser = async (userid) => {
    console.log("fun bn ")  
  
    console.log(userid)
    try {
      const res = await axios.post(
        `http://localhost:5000/user/blockUser/${userid}`,
       newuser,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res.data)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User has been updated',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.reload(); 
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const UnblockUser = async (userid) => {
    console.log("fun un ")  
    console.log(userid)
    try {
      const res = await axios.post(
        `http://localhost:5000/user/unblockUser/${userid}`,
        data1,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
        
      );
    
      console.log(res.data)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User has been updated',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.reload(); 
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formateur">
      <div className="formateur-container">
        <h2>Table formateur</h2>
        <table className="formateur-table">
          <thead>
            <tr>
              <th>User name & E-mail</th>
              <th>Number of courses</th>
              <th>Budget</th>
            </tr>
          </thead>

          <tbody>
            {data2?.map((item) => {
              return (
                <tr key={item._id}>
                  <td data-label="User name & E-mail" className="user-info2">
                    <img
                      src="./images/image.svg"
                      alt="User"
                      className="user-image2"
                    />
                    <div className="user-text2">
                      <p className="user-name2">{item.username}</p>
                      <p className="user-email2">{item.email}</p>
                      <p>{item.role}</p>
                    </div>
                  </td>

                  <td data-label="Number of courses">{item.enrolledCourses.length}</td>

                  <td data-label="Budget">68$</td>

                  <td data-label="Actions">
                    <div class="toggle-and-actions2">
                      <div class="toggle-container2">
                        <label class="switch2">
                          <input
                            type="checkbox"
                            id="toggle-switch"
                            class="checkbox"
                            onClick={() => {
                              console.log(item.isBlocked);
                              if (item.isBlocked ) {
                                UnblockUser(item._id);
                              } else {
                                blockUser(item._id);
                              }
                            }}
                          />
                          <span class="slider2"></span>
                        </label>
                      </div>
                      <a href="">
                        <img
                          src="./images/delete.svg"
                          alt="Delete"
                          class="trash-icon2"
                        />
                      </a>
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
};

export default Formateur;
