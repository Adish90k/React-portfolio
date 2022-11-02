import {React,useState} from 'react'
import Sidebar from '../Sidebar'
import './index.scss'
import Menubar from '../../assets/images/menu-bar.png'

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


<div className="mainaboutdiv">







</div>

</>

  )
}

export default About