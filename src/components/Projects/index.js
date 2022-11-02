import { React, useState } from 'react'
import Sidebar from '../Sidebar'
import './index.scss'

import Menubar from '../../assets/images/menu-bar.png'
import Card from './card'
function Project() {
  const [toggle, setToggle] = useState(false)



  return (
    <>      
          <div className="sidebardiv"><div className="menubardiv" onClick={() => setToggle(!toggle)}>
          <img src={Menubar} alt="Menu bar" width={'28px'}  />
        </div>  {toggle && (
            <Sidebar />)}
          </div>
        

      <div className="maindivproj">
     
        <div className="courselcard">
         <Card/>
         <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
 
    </>
  )
}

export default Project
