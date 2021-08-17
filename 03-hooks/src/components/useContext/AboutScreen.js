import React, { useContext } from 'react'
import { UserContext } from './UserContext'



export const AboutScreen = () => {
    const {user, setUser}= useContext(UserContext)

    const handleClick = () => {
        setUser({})
    }

    return (
        <div>
        <h1>AboutScreen</h1>
        <hr />

        <p className="mt-3">User name: {user.name} </p>
        <p className="mt-3">User id: {user.id} </p>

        <button className="btn btn-info" onClick={handleClick}>Logout</button>
        </div>
    )
}
