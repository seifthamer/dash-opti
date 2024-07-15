import React, { useContext, useEffect, useState } from "react";
import "./etudiant.css";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie";
import AuthContext from "../Context/AuthContext";

const Etudiant = (props) => {
  const state = useContext(AuthContext);
  const data = state.EtudiantApi;

  const token = Cookies.get("token");
  const { user } = props;
  const [data1, setData1] = useState({
    username: user ? user.username : "",
    password: user ? user.password : "",
    email: user ? user.email : "",
  });

  const [newuser, setNewuser] = useState({
    username: user ? user.username : "",
    password: user ? user.password : "",
    email: user ? user.email : "",
  });

  const blockUser = async (userid) => {
    console.log("fun bn ");

    console.log(userid);
    try {
      const res = await axios.post(
        `http://localhost:5000/user/blockUser/${userid}`,
        newuser,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User has been updated",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const UnblockUser = async (userid) => {
    console.log("fun un ");
    console.log(userid);
    try {
      const res = await axios.post(
        `http://localhost:5000/user/unblockUser/${userid}`,
        data1,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User has been updated",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="etudiant">
      <div className="etudiant-container">
        <h2>Table d'étudiant</h2>
        <table className="etudiant-table">
          <thead>
            <tr>
              <th>User name & E-mail</th>
              <th>Number of courses</th>
              <th>Budget</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => {
              return (
                <tr key={item._id}>
                  <td data-label="User name & E-mail" className="user-info">
                    <img
                      src="./images/image.svg"
                      alt="User"
                      className="user-image"
                    />
                    <div className="user-text">
                      <p className="user-name">{item.username}</p>
                      <p className="user-email">{item.email}</p>
                      <p>{item.role}</p>
                      <p>{item.isBlocked?<span style={{color:"red"}}>blocked</span>:<span style={{color:"green"}}>unblocked</span>}</p>
                    </div>
                  </td>
                  <td data-label="Number of courses" className="number">
                    <p>{item.enrolledCourses.length}</p>
                  </td>
                  <td data-label="Budget">68$</td>
                  <td data-label="Actions">
                    <div class="toggle-and-actions">
                      <div class="toggle-container">
                        <label class="switch">
                          <input
                            type="checkbox"
                            id="toggle-switch"
                            class="checkbox"
                            onClick={() => {
                              console.log("item.isBlocked:", item.isBlocked); // Check the value
                              if (item.isBlocked === false) {
                                console.log("Calling UnblockUser");
                                blockUser(item._id);
                              } else {
                                console.log("Calling blockUser");
                                UnblockUser(item._id);
                              }
                            }}
                          />
                          <span class="slider"></span>
                        </label>
                      </div>
                      <a href="">
                        <img
                          src="./images/delete.svg"
                          alt="Delete"
                          class="trash-icon"
                        />
                      </a>{" "}
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

export default Etudiant;
