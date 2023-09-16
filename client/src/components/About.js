import React from 'react'
import pawan from '../images/photo.png'
const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="about_child">
          <div className="row-1 d-flex justify-content-around">
            <div className="photo">
              <img src={pawan} alt="photo" />
            </div>
            <div className="biodata"></div>
          </div>
          <div className="row-2">
            <div className="col">1</div>
            <div className="col">2</div>
            <div className="col">3</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
