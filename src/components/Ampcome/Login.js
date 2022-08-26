import React, { useState } from 'react'
// import Menu from "./Menu"
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    const navigate = useNavigate()
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const users = [{ username: "Umesh@gmail.com", password: "umesh" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
        }
        setusername("");
        setpassword("");
        navigate("/dashboard");
    };

    return (
        <div className='login'>
            <div className='loginleft'>
                <img src="https://w.wallhaven.cc/full/4d/wallhaven-4d681o.jpg" alt="" />
            </div>
            <div className='loginright'>
                <div>
                    <h4>Sign-in to your account</h4><br /><br />
                    <div className="mb-1 w-100" >
                        <form onSubmit={handleSubmit}>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username    " />
                            <br />
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                            <br />
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Unit Name</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <br /><br />
                            <div className="d-grid gap-2 col-6 mx-50 w-100">
                                {/* <NavLink to="/appoinment">submit</NavLink> */}
                                {/* <input type="submit" value="Submit" /> */}

                                <button className="btn btn-primary" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>

                    {/* <input type="text" name="" id="" />
                    <input type="password" name="" id="" />
                    <select name="" id="">
                        <option value="">Select Unit Name</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select> */}
                </div>
            </div>
        </div>
    )
}

export default Login
