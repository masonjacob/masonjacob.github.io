import Axios from 'axios';
import React, { useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import styles from "./assets/css/react.css";




function App() {
  const [projectList, setProjectList] = useState([]);

  /*const addProject = () => {
    Axios.post("http://ec2-3-89-109-4.compute-1.amazonaws.com/post", {
      name: name,
      description: description,
      image: image,
      tags:tags
    }).then(()=> {
      console.log("success");
    })
  }*/

  const getProjects = () => {
    Axios.get("http://ec2-3-89-109-4.compute-1.amazonaws.com/get").then((response) => {
      setProjectList(response.data);
    });
  }


  useEffect(() => {
    getProjects();
  }, []);

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
          <Card.Header><img className="card-image" src={require(`./assets/img/${project.src}/image.jpg`)} alt=""/></Card.Header>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
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
    
      </div>

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
