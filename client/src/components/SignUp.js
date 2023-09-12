import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import image from '../images/signUp.svg';
import { NavLink } from 'react-router-dom';
const SignUp = () => {
  return (
    <>
    <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-0">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-2">Sign up</p>

                <form className="mx-1 mx-md-5">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <PersonIcon/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" className="form-control" placeholder='Enter your name'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                     <EmailIcon/>
                      <label className="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" className="form-control" placeholder='Enter your Email'/>
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                     <WorkIcon/>
                      <label className="form-label" for="form3Example3c">Work</label>
                      <input type="email" id="form3Example3c" className="form-control" placeholder='Enter your Profession' />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <NoEncryptionIcon/>
                      <label className="form-label" for="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" className="form-control" placeholder='Enter your password'/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <NoEncryptionIcon/>
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                      <input type="password" id="form3Example4cd" className="form-control" placeholder='Confirm password'/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" value='register' className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center flex-column order-1 order-lg-2">

                <img src={image}
                  className="img-fluid" alt="sign image"/>
              <div className="signup-image">
                <p>already registered ?<span><NavLink to='/login'>LogIn</NavLink></span></p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default SignUp
