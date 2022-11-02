import {React,useState} from 'react'
import Sidebar from '../Sidebar'
import './index.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Menubar from '../../assets/images/menu-bar.png'

function Contact() {
  const [toggle, setToggle] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ofe26wn', 'template_lfn6sn8', form.current, 'C3v6aK-Dp1nXtNA6C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const stylesend={
    width:"180px",
    backgroundColor:"black",
   fontSize:"15px",
    color:"white",
    fontFamily:" system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  }
  
  return (
    <div className='FullContactdiv'>
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

<p>want to Contact me ? use the form below to send
  an email
</p>

</div>
     <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Entere your name here'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter your email here' />
      <label>Message</label>
      <textarea name="message" className='inputmsg' placeholder='Write a message'/>
      <input type="submit" value="Send"  style={stylesend}/>
    </form>

</div>



      
     </div>


      
      
      </div>
  )
}

export default Contact