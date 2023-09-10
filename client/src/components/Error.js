import React from 'react'
import error from '../images/404_Error.svg'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <>
      <div className=" error-page d-grid d-flex flex-column">
        <div className="container-error">
        <img src={error} alt="" />
        </div>
        <div className="go_home">
            <p><NavLink to="/"><button className='btn btn-danger'>Go Back</button></NavLink></p>
        </div>
      </div>
    </>
  )
}

export default Error
