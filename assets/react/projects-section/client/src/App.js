import './App.css';
import Axios from 'axios';
import React, { useState } from 'react';


function App() {

  const [projectList, getProjectList] = useState([]);

  
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
    console.log(response);
  })
}


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getProjectList}>Get Projects</button>
      </header>
    </div>
  );
}

export default App;
