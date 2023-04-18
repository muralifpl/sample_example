import { useState } from "react";


function App() {


  const[todo,setTodo]=useState([]);
  const[newTodo,setNewTodo]=useState("");

  const handleName=(e)=>{
    setNewTodo(e.target.value);
  }
  const handleAdd=()=>{
    setTodo([...todo,newTodo])
    // setNewTodo("")
  }
  const remove=(xx)=>{
//   console.log(xx);
    const text = todo.filter(check=>{
        return check !== xx
    })
    console.log(text);
    setTodo(text);
  }

    return ( <>
    <h1>todo list</h1>
<input type="text" onChange={handleName}></input>
<button onClick={handleAdd}>Add</button>

<div>
    {
        todo.map((dd,index)=>{
            return <li key={index}>
{dd}
<button onClick={()=>remove(dd)}>x</button>
            </li>
        })
    }
</div>
    </> );
}

export default App;