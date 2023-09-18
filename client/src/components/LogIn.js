import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { NavLink } from 'react-router-dom';
import signIn from '../images/signIn.svg';

const LogIn = () => {

  const navigate = useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


const userLogin = async(e)=>{
    e.preventDefault();
    const res = await fetch("/login",{
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body:JSON.stringify({
        email,password
      })
    });

    const data = res.json();
    if(res.status===400 || !data)
    {
      window.alert("Invalid Credential..!");
      console.log("Invalid Credential..!");
    }else{
      navigate("/")
    }
}

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={signIn}
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form method='POST'>
                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-2">Sign In</p>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <EmailIcon />  <label className="form-label" htmlFor="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                  name='email'
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Enter email " />

                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <LockOpenIcon /> <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    name='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter password" />

                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={userLogin}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                    <NavLink to="/signup" className="link-danger">Register</NavLink></p>
                </div>

              </form>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  )
}

export default LogIn
