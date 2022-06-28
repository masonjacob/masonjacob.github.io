import React, { useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import { setProjectList, selectProjectList } from './loadingSlice';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import TagFilter from './TagFilter';




function App() {
  const projectList = useSelector(selectProjectList);
  console.log(projectList);

  const createProjectsObject = () => {
    const projectIDList = projectList.map((val, key) => {
      return (
        val.id
      )
    });
    const projectsObject = projectIDList.reduce((accumulator, value) => {
      return {...accumulator, [value]: false};
    }, {});
    return projectsObject;
  }

  const renderProjectCard = (project, index) => {
    return (
        <Card key = {index}>
          <Card.Header><img className="card-image" src={require(`../assets/img/${project.src}/image.jpg`)} alt=""/></Card.Header>
          <Card.Body>
            <Card.Title className="customizedTitle">{project.name}</Card.Title>
            <Card.Text>
              {project.text}
            </Card.Text>
          </Card.Body>
        </Card>
    )
  }

//let projectsObject = createProjectsObject();
// console.log(projectsObject);
//const [projectTransitionStates, setProjectTransitionStates] = useState(projectsObject);

  return (
    <div className="App">
      <div className="Header">
    <h1 className="Header-Title">Projects</h1>
      </div>
      <TagFilter/>
      <div className="Projects">
      {projectList.map((val,key) => { 
        return(
        <div key = {key}>
          {renderProjectCard(val)}
        </div>
        )}
      )}
      </div>
    </div>
  );
}

export default App;
