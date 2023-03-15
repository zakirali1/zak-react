import React from 'react';
import { NavLink } from 'react-router-dom';



function Header() {

  return (

    <div>
    <nav className="navbar navbar-light justify-content-end header-menu" style={{borderStyle: "3px solid black"}}>
  {/* <a className="navbar-brand" */}
   
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav">
        <NavLink 
        to="/React-Page"
        end
        className={({isActive}) =>
        isActive ? "nav-link active" : "nav-link" 
      }
      >
        Home
        </NavLink>
        <NavLink 
        to="/projects"
        className={({isActive}) => 
        isActive ? "nav-link active" : "nav-link" 
    }
        >
        Projects
        </NavLink>
        <NavLink 
        to="/contacts"
        className={({isActive}) => 
        isActive ? "nav-link active" : "nav-link" 
    }
        >
        Contact
        </NavLink>

    
    </div>
    
    {/* {<h1>React Portfolio</h1>} */}
  </div>

</nav>

    
</div>

  );
}

export default Header