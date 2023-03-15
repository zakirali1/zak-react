import React from 'react'
import {NavLink} from 'react-router-dom';
import grapf from './images/NewProject1.svg';


function Home() {
  return (
    <div>
      <div className="jumbotron" style={{ backgroundColor: 'transparent', color: 'black'}}>
  <h1 className="display-4 header-1" style={{fontSize: "5.5rem"}}>Hi, I'm Zakir</h1>
  <p className="lead" style={{fontSize: "3rem"}}>Welcome!</p>
  <hr className="my-4" />
  <p><strong>I am a front-end developer. I've worked with HTML, CSS, Javascript, React and Node. This portfolio was built using a combination of all mentioned technologies.</strong></p>
  <NavLink to="https://drive.google.com/file/d/1yus-vtllPinCTGIpaoDtEWJEYvW_7dUa/view?usp=sharing" className="btn btn-primary btn-lg" role="button">CV</NavLink>
</div>

<div className="img-vsc">
<img style={{borderRadius: '50%'}} src={grapf} alt="" className="img-fluid"/>
</div>

<footer>
      
      </footer>
    </div>
   
  );
}

export default Home