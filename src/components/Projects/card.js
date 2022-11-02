import React from 'react'
import githublog from '../../assets/images/GitHub-Mark-Light-64px.png'
function Card() {
  return (
<>

<div className="mainprojcard">
            <div className="imgdivproj"></div>   
            <h1>Project Name</h1>
            <div className="infodivproj">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, officiis corporis.
              </p>
            </div>
            <div className="links">
              <img src={githublog} alt="" srcset="" width={'20px'} />
              <a href="https://www.instagram.com/">github link</a>
            </div>
          </div>

</>
  )
}

export default Card