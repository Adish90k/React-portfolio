// import Sidebar from '../Sidebar';
import './index.scss';
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects"
import Home from '../Home';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';

const Layout=()=>{
    return(
<>
 
<Router>
  {/* <Sidebar/> */}
  <Routes>
<Route path='/' exact element={<Home/>}/>
<Route path='/about' exact element={<About/>}/>
<Route path='/contact' exact element={<Contact/>}/>
<Route path='/projects' exact element={<Projects/>}/>
</Routes>
</Router>
</>
    )
}

export default Layout;