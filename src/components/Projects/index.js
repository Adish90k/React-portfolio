import { React, useState } from 'react'
import Sidebar from '../Sidebar'
import './index.scss'
import valimg from "../../assets/images/Screenshot (1418).png"
import reviewimg from "../../assets/images/Screenshot (1414).png"
import netfliximg from "../../assets/images/Screenshot (1416).png"
import spookyimg from "../../assets/images/spooky.png"
import Menubar from '../../assets/images/menu1.png'
import Card from './card'
function Project() {
  const info = ["This project is about a valorant landing page made using the valorant api made using react js for the frontend part ","A review website made using html css and javascript and tmdb movie api","A netflix frontend clone made using html css and javascript",
  "A 3d art for a spooky house made using blender"
]
const gitlink = ["https://github.com/Adish90k/Valorant-landing-page","https://github.com/Adish90k/Review-website","https://github.com/Adish90k/Netflix-ui-clone","https://github.com/Adish90k/Spookyhouse"]

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
         <Card image={valimg} name="Valorant Page" infocard={info[0]} gitlinkcard={gitlink[0]}/>
         <Card image={reviewimg} name="Review website" infocard={info[1]} gitlinkcard={gitlink[1]}/>
          <Card image={netfliximg} name="Netflix clone" infocard={info[2]} gitlinkcard={gitlink[2]}/>
          <Card image={spookyimg} name="Spooky house" infocard={info[3]} gitlinkcard={gitlink[3]}/>
        </div>
      </div>
 
    </>
  )
}

export default Project
