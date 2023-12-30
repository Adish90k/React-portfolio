import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Menubar from '../../assets/images/menu1.png'

function Contact() {
  const [toggle, setToggle] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_iz4y286',
        'template_lfn6sn8',
        form.current,
        'C3v6aK-Dp1nXtNA6C'
      )
      .then(
        (result) => {
          alert(`your message has been sent succesfully`)
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const stylesend = {
    width: '180px',
    fontSize: '15px',
    fontFamily:
      " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  }

  useEffect(() => {
    const ifameData = document.getElementById('iframeId')
    const lat = 15.4144558
    const lon = 73.9871632
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
  })

  return (
 



  
    <div className="FullContactdiv">
      <div className="sidebardiv">
        <div className="menubardiv" onClick={() => setToggle(!toggle)}>
          <img src={Menubar} alt="Menu bar" width={'28px'} />
        </div>
        {toggle && <Sidebar />}
      </div>
      <div className="maincontactinfodiv">
        <div className="contactformdiv">
          <div className="infocontactdiv">
            <h1>Adish Here</h1>

            <p>want to Contact me ? use the form below to send an email</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Entere your name here"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email here"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              className="inputmsg"
              placeholder="Write a message"
            />
         
            <input type="submit" value="Send" style={stylesend} id='sendmsgbtn' />
          </form>
        </div>
      </div>
  
        <div className="mainmapdiv">
          <div className="infomapsdiv">
          <p>Checkout my location here </p>
          </div>
          <iframe id="iframeId" className='maps'></iframe>
        </div>

    </div>
   
  )
}

export default Contact
