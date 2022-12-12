import React from 'react'
import githublog from '../../assets/images/GitHub-Mark-Light-64px.png'
function Card(props) {
  return (
<>

<div className="mainprojcard">
            <div className="imgdivproj">
              <img src={props.image} alt="" srcset="" width="200px" />
              </div>   
            <h1>{props.name}</h1>
            <div className="infodivproj">
              <p>
              {props.infocard}
              </p>
            </div>
            <div className="links">
              <img src={githublog} alt="" srcset="" width={'20px'} />
              <a href={props.gitlinkcard}>github link</a>
            </div>
          </div>

</>
  )
}

export default Card