import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import data from './generate.json';
import movie from './images/movie.png';
import readgen from './images/rm.png';
import wd from './images/wd.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import quiz from './images/quiz.png';
import passwrd from './images/passwordgen.png';
import scheduler from './images/scheduler.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



console.log(data)
function Projects2() {
  const [index, setIndex] = useState(-1);

  const arr = [readgen, movie, wd, quiz, passwrd, scheduler];

  const genImage = (idx) => {
    return arr[idx % arr.length];
  };

  const handleClick = (idx) => {
    setIndex(idx);
  };

  const ProjectDetails = ({ project, index }) => (
    
    <div className="project-card">
      <Col key={project.id} md={6} className="mb-4">
        <NavLink to={`/projects/${project.id}`}>
          <Card>
            <Card.Img variant="top" src={genImage(project.id)} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button variant="primary" onClick={() => handleClick(index)}>
                More Details
              </Button>
            </Card.Body>
          </Card>
        </NavLink>
      </Col>
    </div>
   
  
  );

  const listItems = data.map((project, index) => (
    <ProjectDetails key={project.id} project={project} index={index} />
  ));

  return (
    <div className="projects">
      <h1>Project Gallery</h1>
      <Row>{listItems}</Row>
    </div>
  );
}

export default Projects2;