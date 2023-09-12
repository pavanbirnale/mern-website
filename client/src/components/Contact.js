import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import contact from '../images/contact.jpg';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact__wrapper shadow-lg mt-n9">
          <div className="row no-gutters">
            <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
              <h3 className="color--white mb-5">Get in Touch</h3>

            

                  <figure className="figure  m-0 opacity-06 z-index-100" style={{bottom:'0', right: "10px"}}>
                    <img src={contact} alt="contact images" className='contact_img'/>
                  </figure>
                </div>

                <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                  <form action="#" className="contact-form form-validate" >
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                        <PersonIcon/>
                          <label className="required-field mb-2" htmlFor="firstName">First Name</label>
                          <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your name" />
                        </div>
                      </div>

                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                        <EmailIcon/>
                          <label className="required-field mb-2" htmlFor="email">Email</label>
                          <input type="text" className="form-control
                          " id="email" name="email" placeholder="Enter email" />
                        </div>
                      </div>

                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                        <PhoneAndroidIcon/>
                          <label htmlFor="phone" className='mb-2'>Mobile number</label>
                          <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your mobile number" />
                        </div>
                      </div>

                      <div className="col-sm-12 mb-3">
                        <div className="form-group">
                        <LiveHelpIcon/>
                          <label className="required-field mb-2" htmlFor="message">How can we help?</label>
                          <textarea className="form-control" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                        </div>
                      </div>

                      <div className="col-sm-12 mb-3">
                        <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                      </div>

                    </div>
                  </form>
                </div>


            </div>
          </div>
        </div>
      </>
      )
}

      export default Contact
