import { useAppContextUsers } from "../context/contextUsers";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const contextUser = useAppContextUsers()
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [password, setPassword] = useState()

    const check = () => {
        const currentUser = contextUser.sharedUsers.find((x) => x.email === user && x.password === password)

        if (currentUser) {
            const login = contextUser.sharedUsers.map((x)=> currentUser.id === x.id? {...x, isLogin : true } 
            : x )
            contextUser.setSharedUsers(login)
            navigate("/")
        } else {
            alert("usuario y/o contraseña no encontrado")
            console.log(contextUser.sharedUsers)
        }
    }
    return (<>
        <div className="container-user">
            <div className="container-user-login">
                <h1>Great to see you again !</h1>
                <h4>Email</h4>
                <input type="text" placeholder="Enter your email" onChange={(e) => setUser(e.target.value)} required />
                <h4>Password</h4>
                <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button className="button-Login" variant="contained" onClick={() => check()}>LOG IN</Button>
            <Button variant="text" >Have you forgotten your password?</Button>
        </div>
        <hr />
        <div className="container-user1">
            <div className="container-user-login">
                <h1>Register</h1>
                <p>If you still don't have an account, use this option to acces the registration form. </p>
                <Button className="button-Login" variant="contained">CREATE ACCOUNT</Button>
            </div>
        </div>


    </>)

}


export default Users