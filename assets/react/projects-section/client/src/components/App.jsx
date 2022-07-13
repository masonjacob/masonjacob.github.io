import React, { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { selectProjectList } from './loadingSlice';
import TagFilter from './TagFilter';
import CustomCard from './CustomCard';
import CustomModal from './CustomModal.jsx';
import {motion} from "framer-motion";



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
    <motion.div className="App" initial={{y: 50, opacity: 0}} animate = {{y: 0, opacity: 1}} transition={{ type: "tween", duration: 1 }}>
      <div className="Header">
    <h1 className="Header-Title">Projects</h1>
      </div>
      <TagFilter/>
      <div className="Projects">
      {projectList.map((val,key) => { 
        return(
        <motion.div key = {key} /*onClick={() => (<CustomModal val = {val}/>)}*/>
          <CustomCard val = {val}/>
        </motion.div>
        )}
      )}
      </div>
    </motion.div>
  );
}

export default App;
