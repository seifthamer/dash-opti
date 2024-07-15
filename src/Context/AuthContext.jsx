import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const token = Cookies.get("token");
  const [users, setUsers] = useState();
  const [etudiants, setEtudiants] = useState();
  const [formateurs, setFormateurs] = useState();
  const [Cours, setCours] = useState();
  const [stats, setStats] = useState();

  useEffect(() => {
    if (token) {
      const getUsers = async () => {
        try {
          const res = await axios.get("http://localhost:5000/user/getAll", {
            headers: { Authorization: `bearer ${token}` },
          });
          console.log(res.data);
          setUsers(res.data);

          // Filter users based on roles and set state accordingly
          const etudiantUsers = res.data.filter(user => user.role == "Etudiant");
          console.log("la liste des etudiants",etudiantUsers)
          setEtudiants(etudiantUsers);

          const formateurUsers = res.data.filter(user => user.role == "Enseignant");
          console.log("la liste des eneignants" , formateurUsers)
          setFormateurs(formateurUsers);

        } catch (err) {
          console.log(err);
        }   
      };
      const getCours = async () => {
        try{
        const res = await axios.get("http://localhost:5000/course/getAllCourses",{
          headers: { Authorization: `bearer ${token}` }
        }
        );
        console.log(res.data);
        setCours(res.data);
      } catch (err) {
        console.log(err);
      } 
      };
      // const getstats = async () => {
      //   try{
      //     const res = await axios.get("http://localhost:5000/api/user/users/monthly-count");
      //     console.log("count month data:",res.data);
      //     setStats(res.data)
      //   }catch(eer){
      //     console.log(eer)
      //   }
       
      // };

      getUsers();
      getCours();
      // getstats();
    }
  }, [token]);

  const state = {
    
    EtudiantApi: etudiants,
    FormateurApi: formateurs,
    CoursApi:Cours,
    // StatsApi:stats,
  };

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
