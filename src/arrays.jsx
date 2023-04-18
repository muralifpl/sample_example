import { useState } from "react";

function Array() {

    const[save,setSave]=useState([]);
   
  const[nw,setNw]=useState("");

const handleChange=(e)=>{
      setNw(e.target.value);
}
const handleAdd=()=>{
     
     setSave([...save,nw]);
     setNw("");
      

}
const handleRemove=(remove)=>{
       const check = save.filter(test=>{
        
             return test !== remove      

       }) 
       setSave(check);  

}


    return ( <div>
        <input type="text" value={nw} onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>
{
    save.map((sample)=>{
        return<div>
            {sample}
            <button onClick={()=>{handleRemove(sample)}}>x</button>
        </div>

    })
}
    </div> 
    
    );
}

export default Array;