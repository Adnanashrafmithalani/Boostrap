import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Alert from "./Components/Alert";


function App() {
  const  [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type)=>{
    setAlert({
      msg:  massage,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
   const toggleMode = () => {
    if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#003E59';
    showAlert("dark mode has been Enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been Enable", "success");
      }
  }
  return (
    <>
      <Navbar tittle="DEVTRONICS" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <About  mode={mode} /> */}
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Type Here Whatever You Like" mode={mode}/>
      </div>
    </>
  );
}

export default App;
