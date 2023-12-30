import './index.scss'
import React, { useState } from 'react'
import Plogo from '../../assets/images/letter-p.png'
import Linkedin from '../../assets/images/linkedin.png'
import Projects from '../../assets/images/analytics.png'
import Menubar from '../../assets/images/menu1.png'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom';
export default function Home() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="sidebardiv">
        <div className="menubardiv" onClick={() => setToggle(!toggle)}>
          <img src={Menubar} alt="Menu bar" width={'28px'} />
        </div>
        {toggle && <Sidebar />}
      </div>

      <div className="maindiv">
        <div className="topnavdiv">
          <div className="controldiv">
            <div className="logodiv">
              <img src={Plogo} alt="logo" width={'30px'} />
              <span>forlio.</span>
            </div>
            <div className="ultags">
              <ul>
                <li>
                <Link to="/projects" className='mainhomenavlinks'>
                  <div className="controlidivli">
                      <img src={Projects} alt="projectlogo" width={'25px'} />
                    <p>Projects</p> 
                  </div>  </Link>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/adish-kerkar-568482223" className='mainhomenavlinks'>
                  <div className="controlidivli">
                    <img src={Linkedin} alt="linkedin" width={'25px'} />
                    <p>Linkedin</p> 
                  </div> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="infodiv">
          <div className="desinfodiv">
            <div className="name-wrapper">
              <div className="linediv"></div>
              <span className="namepara">Adish Kerkar</span>
            </div>
            <p>Hello My,</p>
            <p> name is Adish</p>
            <p>i am a Web</p>
            <h1>Developer</h1>
            <div className="nextbuttondiv">
              <Link to="/about">
              <button type="button">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
