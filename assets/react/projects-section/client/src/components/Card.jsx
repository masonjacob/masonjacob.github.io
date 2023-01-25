import {motion, AnimateSharedLayout, AnimatePresence} from "framer-motion";
import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { selectProjectList } from './loadingSlice'; 

//<img className="card-image" src={require(`../assets/img/${project.src}/image.jpg`)} alt=""/>

function Card() {
  const [selectedId, setSelectedId] = useState(null);
  const projectList = useSelector(selectProjectList);
  {projectList.map(projectList => (
    <motion.div layoutId={projectList.id} onClick={() => setSelectedId(projectList.id)}>
      <motion.h5>{projectList.name}</motion.h5>
      <motion.h2>{projectList.name}</motion.h2>
    </motion.div>
  ))}

  <AnimatePresence>
    {selectedId && (
      <motion.div layoutId={selectedId}>
        <motion.h5>{projectList.name}</motion.h5>
        <motion.h2>{projectList.name}</motion.h2>
        <motion.button onClick={() => setSelectedId(null)} />
      </motion.div>
    )}
  </AnimatePresence>
}

export default Card;