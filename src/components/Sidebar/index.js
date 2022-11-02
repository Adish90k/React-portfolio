import './index.scss'
import { Link } from 'react-router-dom';
import Home from '../../assets/images/home.png'
import About from '../../assets/images/about.png'
import Contact from '../../assets/images/contact.png'
import Projects from '../../assets/images/analytics.png'
import Instagram from '../../assets/images/instagram.png'
import Linkedin from '../../assets/images/linkedin.png'
import Twitter from '../../assets/images/twitter.png'
const Sidebar = () => {    

  return (
    <>

      <div className="nav-bar">
        <ul className='ulinfo'>
          <Link to='/' >
          <li>  <img src={Home} alt="" srcset="" width={'18px'}/></li>
          </Link>
          <Link to='/about'  >
      <li><img src={About} alt="" srcset="" width={'18px'}/></li>   
          </Link>
          <Link to='/contact'  >
         <li> <img src={Contact} alt="" srcset="" width={'18px'}/></li>
          </Link>
          <Link to='/projects' >
       <li><img src={Projects} alt="" srcset="" width={'18px'}/></li>   
          </Link>
        </ul>
        <ul className='ullinks'>
      <li><a href="https://www.instagram.com/">
            <img src={Instagram} alt="" srcset="" width={'18px'}/>
          </a></li>    
          <li>
            <a href="https://www.instagram.com/
            ">
              <img src={Linkedin} alt="" srcset="" width={'18px'}/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={Twitter} alt="" srcset="" width={'18px'}/>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
