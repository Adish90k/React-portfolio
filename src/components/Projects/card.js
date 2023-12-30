import React from 'react'
import githublog from '../../assets/images/GitHub-Mark-Light-64px.png'
function Card(props) {
  let output = props.skills

  return (
    <>
      <div className="mainprojcard">
        <div className="imgdivproj">
          {console.log(props.image)}
          {props.image ===
          '/static/media/bookmyspot1.02e5353053fb123772d0.jpg'?(
            <img src={props.image} alt="" srcset="" width="80px" />
          ) : (
            <img src={props.image} alt="" srcset="" width="220px" />
          )}
        </div>

        <div className="skillsprojectinfodiv">
          {output.map((elem) => (
            <span className="projectskillsspan">{elem}</span>
          ))}
        </div>
        <h1>{props.name}</h1>
        <div className="infodivproj">
          <p>{props.infocard}</p>
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
