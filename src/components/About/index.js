import { React, useState } from 'react'
import Sidebar from '../Sidebar'
import './index.scss'
import Menubar from '../../assets/images/menu1.png'
import Profileimg from '../../assets/images/profileimg.jpg'
// import testimg from '../../assets/images/GitHub-Mark-Light-64px.png'
import Instagram from '../../assets/images/instagram.png'
// import Linkedin from ""
import Linkedin from '../../assets/images/linkedin.png'
import githubimg from '../../assets/images/GitHub-Mark-Light-64px.png'

 

function About() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div className="sidebardiv">
        <div className="menubardiv" onClick={() => setToggle(!toggle)}>
          <img src={Menubar} alt="Menu bar" width={'28px'} />
        </div>
        {toggle && <Sidebar />}
      </div>
      <div className="mainaboutcontainer">
        <div className="mainallcontentdiv">
          
    <div className="contenaboutdiv">
            <h1>Adish Kerkar</h1>
             <h3>Web Developer</h3>
            <p>
              Hi i am adish a third year student at NIT K surathkal pursing
              btech in information technology, i am interested in web
              development and contributing to open source
            </p>
            <h2>skills</h2>
            <div className="skillsaboutdiv">
              <li>React js</li>
              <li>Javascript</li>
              <li>Node js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
              <li>Mysql</li>
              <li>Aws Lambda</li>
              <li>Aws Dyanamodb</li>
              <li>Html</li>
              <li>Css</li>
            </div>
            <div className="sociallinks">
              <li>
                <a href="https://www.instagram.com/adish_kerkar/">
                  <img src={Instagram} alt="" srcset="" width="30px" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adish-kerkar-568482223">
                  <img src={Linkedin} alt="" srcset="" width="30px" />
                </a>
              </li>

              <li>
                <a href="https://github.com/Adish90k">
                  <img
                    src={githubimg}
                    alt=""
                    srcset=""
                    width="30px"
                    id="githubaboutimg"
                  />
                </a>
              </li>
            </div>
            <div className="imgaboutdiv">
              <img src={Profileimg} alt="" width="100px" />
            </div>
            
          </div> 


        </div>
      </div>
    </>
  )
}

export default About
