import React from 'react';
import { useParams } from 'react-router-dom';
import data from './generate.json';
import readgen from './images/rm.png';
import movie from './images/movie.png';
import wd from './images/wd.png';
import quiz from './images/quiz.png';
import passwrd from './images/passwordgen.png';
import scheduler from './images/scheduler.png';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom'

 const images = [readgen, movie, wd, quiz, passwrd, scheduler]

function ProjectDetailsPage() {
  const { id } = useParams();
  

  

  const project = data.find((project) => project.id === Number(id));
console.log(project)
  if (!project) {
    return <div>Project not found</div>;
  }


  const image = images[project.id % images.length]

  return (
<div className='what'>
    <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body className="text-center">
          <Card.Text style={{textAlign: 'center'}}>
            {project.title}
          </Card.Text>
          <NavLink className="nav-project btn btn-dark" to={project.code}>
             Code
            </NavLink>
            <br />
            <br />
            <NavLink className="nav-project btn btn-dark" to={project.pages}>
             Page
            </NavLink>
        </Card.Body>
      </Card>
      <br />
      

      </div>
    
  );
}

export default ProjectDetailsPage;