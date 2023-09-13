import React from 'react'
import pawan from '../images/photo_pawan.jpeg'
const About = () => {
  return (
    <>
      <div className="about_page">
        <div className="row-1">
          <figure>
            <img src={pawan} alt="" />
          </figure>
          <div className="about_name m-4 ">
            <h5>Pawan Birnale</h5>
          </div>
        </div>

        <div className="row-2"></div>
      </div>
    </>
  )
}

export default About
