import Axios from 'axios';
import React, { useState } from 'react';
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'




function App() {

  const [projectList, setProjectList] = useState([]);

  /*const addProject = () => {
    Axios.post("http://ec2-3-89-109-4.compute-1.amazonaws.com/post", {
      id: id,
      name: name,
      description: description,
      image: image
    }).then(()=> {
      console.log("success");
    })
  }*/

  const getProjects = () => {
    Axios.get("http://ec2-3-89-109-4.compute-1.amazonaws.com/get").then((response) => {
      setProjectList(response.data);
    });
  }

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

  getProjects();
  let projectsObject = createProjectsObject();
  const [projectTransitionStates, setProjectTransitionStates] = useState(projectsObject);





  return (
    <div className="App">
      <div className="Header">
    
      </div>
      <div className="Projects">
        {projectList.map((val, key) => {

          return (
            <div className="Project">
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>{val.name}</Card.Header>
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
