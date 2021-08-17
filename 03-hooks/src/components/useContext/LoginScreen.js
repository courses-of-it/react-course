import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import { useForm } from "../../hooks/useForm";


export const LoginScreen = () => {
    const {user, setUser} = useContext(UserContext)
    const [{id, name}, handleInputChange, reset] = useForm({ id: user.id, name: user.name })

    const submitForm = (e) => {
        e.preventDefault();

        setUser({
            id,
            name
        })
        reset()

    }

    return (
        <div>
        <h1>LoginScreen</h1>
        <hr />

        <form action="" onSubmit={submitForm}>
            <input className="form-control mb-3" type="text" name="id" onChange={handleInputChange} placeholder="id"/>
            <input className="form-control mb-3" type="text" name="name" onChange={handleInputChange} placeholder="name"/>

            <button type="submit" className="btn btn-outline-danger">Login</button>
        </form>

        </div>
    )
}