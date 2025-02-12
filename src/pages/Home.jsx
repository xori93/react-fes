import React, { useEffect, useState } from "react"
import axios from "axios"

function Home() {
  // in order to get the data on our page we need to store it in a variable
  // set the state to an empty []
 const [users, setUsers] = useState([])
  async function fetchUsers() {
     // axios.get fetches your api
    try {  // Important: Add a try-catch block for error handling
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users"); // Correct URL
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error); // Handle errors properly
      // Optionally, display an error message to the user
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <h1>Home</h1>;
}

export default Home;