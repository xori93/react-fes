import React, { useEffect } from "react"
import axios from "axios"

function Home() {
  async function main() {
    // axios.get fetches your api
   const { data } = await axios.get("https://jsonplaceholder.typicode.com/user")
    console.log(data)
  }

  useEffect(() => {
    main();
  }, [])


  return <h1>Home</h1>
}

export default Home