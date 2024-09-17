import './App.css'
import { useRef,useState,useEffect } from 'react';
import { uploadFile } from './servies/api';

function App() {
  
  const fileInputRef = useRef(); 

  const[file,setFile] = useState();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let res = await uploadFile(data); 
        // try {
        //   let res = await uploadFile(data); 
        //   console.log('File uploaded successfully:', res);
        // } catch (error) {
        //   console.error('Error uploading file:', error);
        // }
      }
    }

    getImage();

  }, [file]);

  const onClick = ()=>{
  fileInputRef.current.click();
  }


  return (
    <>
     <div className="container">
      <img src="" alt="idk" />
      <div className="wrapper">

        <h1>simple file sharing</h1>

        <button onClick={onClick}> Upload </button>
        <input type="file" ref={fileInputRef} style={{display:'none'}}  onChange ={(e)=>setFile(e.target.files[0])}/>

      </div>
     </div>
    </>
  )
}

export default App
