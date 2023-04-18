import React, { useState, useEffect, useRef } from 'react';
import './progress.css'
function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(null);
// console.log(!isPaused);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            return 0;
          } else {
            return prevProgress + 1;
          }
        });
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleHover = (bb) => {
    setIsPaused(true);
    setProgress(bb);
    setId('mur')

  };

  const handleLeave = () => {
    setIsPaused(false);
    setId('')


  };
const[color,setColor]=useState("")
   
const[id,setId]=useState();
       
    

  return (
    <div className="mm">
      <div className="lee" ref={progressRef} style={{ width: `${progress}%`}} />
      <div className='d-flex justify-content-between'>
      <div className="content" onMouseEnter={()=>handleHover(25)} onMouseLeave={handleLeave} >
        <h2  style={{color:progress<25?"grey":"black"}}>Progress: {progress}%</h2>
        <div id={id}></div>
      </div>
      <div className="content" onMouseEnter={()=>handleHover(50)} onMouseLeave={handleLeave}>
        <h2 id="h3" style={{color:(progress<50)&&(progress>35)?"grey":"black"}}>Progress: {progress}%</h2>
      </div>
      <div className="content" onMouseEnter={()=>handleHover(75)} onMouseLeave={handleLeave}>
        <h2 id="h4" style={{color:(progress<75)&&(progress>50)?"grey":"black"}} >Progress: {progress}%</h2>
      </div>
      <div className="content" onMouseEnter={()=>handleHover(100)} onMouseLeave={handleLeave}>
        <h2 id="h5" style={{color:(progress<=100)&&(progress>75)?"grey":"black"}}>Progress: {progress}%</h2>
      </div>
    </div>
    </div>
  );
}

export default ProgressBar;