import React from 'react'

const User = (Props) => {
  console.warn(Props)
  return (
    <div>
      <h1>User Component</h1>
      <h2>User Name={Props.data.name}</h2>
      <h2>User Email={Props.data.email}</h2>

    </div>
  )
}

export default User
