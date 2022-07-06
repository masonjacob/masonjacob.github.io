import Axios from 'axios';
import ReactLoading from 'react-loading';
import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setProjectList } from './loadingSlice';
import App from './App';



const Loading = ({ type, color }) => {
    const [done,setDone]=useState(undefined);
    const dispatch = useDispatch();

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
      dispatch(setProjectList(response.data));
      setDone(true);
    });
  }

  useEffect(() => {
      setTimeout(() => {
          getProjects();
      }, 2000);
  }, []);
    
    return (
        <>
        {!done ? (
            <>
                <div className="loadingDiv">
                    <ReactLoading className="loading" type={type} color={color} height={'20%'} width={'20%'} />
                </div><div>
                    <h1 className="loadingHeading">Project Display V0.0 Loading...</h1>
                    <p className="loadingText">Full Stack React Application proudly developed by <em>Mason Jacob.</em></p>
                </div>
            </>
        ) : (<App/>)}
        </>
    )
};
 
export default Loading;
