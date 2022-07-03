import ReactLoading from 'react-loading';
import React, { useState, useEffect} from 'react';
import Placeholder from './Placeholder';


const Loading = ({ type, color }) => {
    const [done,setDone]=useState(undefined);

  const getProjects = () => {
      setDone(true);
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
        ) : (<Placeholder/>)}
        </>
    )
};
 
export default Loading;
