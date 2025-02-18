import React from 'react'

function User({ id, name, email, username }) {
  return (
    <div key={id} style={{ border: `2px solid black` }}>
          <div>{id}</div>
          <div>{name.toUpperCase()}</div>
          <div>{email}</div>
          <div>{username}</div>
          {/* short hand notation */}
          {/* if the value might be undefined add a "?" */}
          {/* {users.length > 0
        ? <h1>{users[0]?.name}</h1>
        :  <h1>Loading...</h1>
        } */}
        </div>
  )
}

export default User