import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { selectProjectList } from './loadingSlice';
import TagFilter from './TagFilter';
import CustomCard from './CustomCard';
import CustomModal from './CustomModal.jsx';



const App = () => {
  const projectList = useSelector(selectProjectList);

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
        <div key = {key} onClick={() => (<CustomModal val = {val}/>)}>
          <CustomCard val = {val}/>
        </div>
        )}
      )}
      </div>
    </div>
  );
}

export default App;
