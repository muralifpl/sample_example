import React, { useState } from "react";
import EasyCrop from "./EasyCrop";
import "./App.css"
function App() {
  const [image, setImage] = useState(null);

const[img,setIm]=useState(null);

  const handleImageUpload = async (e) => {

    setImage(URL.createObjectURL(e.target.files[0]));
    
  };
  console.log(image);

  return (
    <div className="App">
      <header className="App-header">
        <label className="_coverImage-holder">
          Upload Image<p></p>
          <input
            type="file"
            name="cover"
            onChange={handleImageUpload}
            accept="img/*"
            style={{ display: "none" }}
          />
        </label>
        <EasyCrop image={image} setIm={setIm} />

      </header>
    </div>
  );
}

export default App;

 
//   return (
//     <div className='newone'>
//       <button onClick={Hello} onChange={setChange}>
//         <h1>Post</h1>
//     </button>
//     <h1>{set.new}</h1>
//     <h1 id="uni">press here</h1>
//     </div>

//   )
// }

// export default App;