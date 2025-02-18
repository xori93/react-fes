import React, { useEffect, useState } from "react"
import axios from "axios"
import User from "../components/User.jsx";
import { Link } from "react-router-dom";
// import User from "./Users";

function Home() {
  // in order to get the data on our page we need to store it in a variable
  // set the state to an empty []
  const [users, setUsers] = useState([])
  async function fetchUsers() {
    // axios.get fetches your api data 
    try {  // Important: Add a try-catch block for error handling
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users"); // Correct URL
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error); // Handle errors properly
      // Optionally, display an error message to the user
    }
  }

  useEffect(() => {
    // set time out for 2 seconds for a amore dramatic look
      fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User  
            id={user.id} 
            name={user.name} 
            email={user.email} 
            username={user.username}
          />
         </Link>
      ))}
      {/* different ways to add styling in the js */}
      {/* <div style={{border: "1px solid black"}}> */}
    </div>
  );
}

export default Home;