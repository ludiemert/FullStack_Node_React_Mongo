import React, { useEffect, useState } from "react";

//import { AuthContext } from "../context/AuthContext.js";

import api from "../services/api";

export default function Home() {
  const [user, setUser] = useState([]);

 // const { auth } = useContext(AuthContext);

  useEffect(() => {
   const token = localStorage.getItem("@token:totalzero");
    if (token) {
      api
      .get("/users", {
        header: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data));
    }
  }, []);

  return(
    <div>
      <table>
        <thead>
          <th>Email</th>
          <th>Name</th>
          <th>User</th>
          <th>Phone</th>
        </thead>
        <tbody>
          {user.map((user) => {
            return (              
              <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
