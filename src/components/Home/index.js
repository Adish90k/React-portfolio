import './index.scss'
import React, { useState } from 'react'
import Plogo from '../../assets/images/letter-p.png'
import Linkedin from '../../assets/images/linkedin.png'
import Projects from '../../assets/images/analytics.png'
import Menubar from '../../assets/images/menu-bar.png'
import Sidebar from '../Sidebar'
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
                  <div className="controlidivli">
                    <img src={Projects} alt="projectlogo" width={'25px'} />
                    <p>Projects</p>
                  </div>
                </li>
                <li>
                  <div className="controlidivli">
                    <img src={Linkedin} alt="linkedin" width={'25px'} />
                    <p>Linkedin</p> 
                  </div>
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
            <h1>Designer</h1>
            <div className="nextbuttondiv">
              <button type="button">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
