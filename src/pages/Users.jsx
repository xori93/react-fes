import { useParams } from "react-router-dom"
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
}

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <h1>{id}}</h1>
  )
}

export default User