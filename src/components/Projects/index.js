import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import './index.scss';
import valimg from '../../assets/images/Screenshot (1418).png';
import BookstoreImg from "../../assets/images/Screenshot (1490).png";
import netfliximg from '../../assets/images/Screenshot (1416).png';
import spookyimg from '../../assets/images/spooky.png';
import Menubar from '../../assets/images/menu1.png';
import Geochat from "../../assets/images/Screenshot (1489).png";
import Bookmyspot from "../../assets/images/bookmyspot.png";
import Card from './card';

const projectData = [
  {
    name: 'BookMyspot',
    image: Bookmyspot,
    info: 'A spot booking website that lets you book your spot in your favourite shop also providing with the various details about the shop',
    gitLink: 'https://github.com/book-my-spot/react-web',
    skills: ['React.js','Amazon DynamoDb','Nodejs','Express js', 'CSS', 'AWS Lambda','Amazon API Gateway'],
  }
  ,
  {
    name: 'BookStore',
    image: BookstoreImg,
    info: 'A mern stack based bookstore website that lets you to add update and delete books',
    gitLink: 'https://github.com/Adish90k/Bookstore',
    skills: ['React.js','MongoDb','Nodejs','Express js', 'CSS', 'JavaScript'],
  }
  ,
  {
    name: 'GeoChat',
    image: Geochat,
    info: 'A realtime chat website that lets you chat with other users also providing you with their location',
    gitLink: 'https://github.com/Adish90k/Geochat',
    skills: ['React.js','MongoDb','JWT','Nodejs','Express js', 'CSS', 'JavaScript'],
  },
  {
    name: 'Valorant Page',
    image: valimg,
    info: 'A Valorant landing page made using the Valorant API with React.js for the frontend.',
    gitLink: 'https://github.com/Adish90k/Valorant-landing-page',
    skills: ['React.js', 'CSS', 'JavaScript'],
  },
  {
    name: 'Netflix UI clone',
    image: netfliximg,
    info: 'A Netflix frontend clone made using HTML, CSS, and JavaScript.',
    gitLink: 'https://github.com/Adish90k/Netflix-ui-clone',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Spooky house',
    image: spookyimg,
    info: 'A 3D art for a spooky house made using Blender.',
    gitLink: 'https://github.com/Adish90k/Spookyhouse',
    skills: ['Blender'],
  },
];

function Project() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="sidebardiv">
        <div className="menubardiv" onClick={() => setToggle(!toggle)}>
          <img src={Menubar} alt="Menu bar" width={'28px'} />
        </div>
        {toggle && <Sidebar />}
      </div>

      <div className="maindivproj">
        <div className="courselcard">
          {projectData.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              name={project.name}
              infocard={project.info}
              gitlinkcard={project.gitLink}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
