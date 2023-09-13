import React from 'react'
import pawan from '../images/photo.png'
const About = () => {
  return (
    <>
      <div className="about_page">
        <div className="about_container">
          <div className="row-1 d-flex">
            <div className="photo">
              <figure>
                <img src={pawan} className='' alt="" />
              </figure>
            </div>
            <div className="intro text-center mt-5 ">
              <h3>Pawan Birnale</h3>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="row-2 d-flex justify-content-evenly mt-3">
            <div className="about_row-2_contain ">1</div>
            <div className="about_row-2_contain">2</div>
            <div className="about_row-2_contain">3</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
