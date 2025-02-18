import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"

function User() {
  const { id } = useParams()
  const [user, setUser] = useState({}) // 3

// print the result you get from hitting the api/id
// 1. create an async function function.
// 2. await the the axios call for the api
// 3. create a new hook to store the user 
// 4. get the data from the api

async function fetchUser() { //1
 const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) //2 and 4
 console.log(data)
 setUser(data)
}

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div>
      <Link to="/">Go back</Link>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.username}</p>
    </div>
  )
}

export default User