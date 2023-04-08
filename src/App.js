import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from './components/Navbarcomp';
import Textform from './components/Textform';
import { useState } from 'react';
import Alertcomp from './components/htmlelements/Alertcomp';
import About from './components/About';
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light") //Whether dark mode is enabled or not
  const [modelabel, setmodeLabel] = useState("Enable Dark Mode");
  const [style, setStyle] = useState({color: "black" , marginRight: "10px"});
  const [alert, setAlert] = useState(null)

  const showAlert = (heading, message, type) => {
    setAlert({
      heading: heading,
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 15000);
  };

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setmodeLabel('Enable Light Mode');
      setStyle({ color: "White", marginRight: "10px" });
      document.body.style.backgroundColor = "grey";
      showAlert("I am an alert","The mode is set to dark", "success");
      document.title="TextUtils-Dark Mode";

    }else{
     setMode('light');
     setmodeLabel("Enable Dark Mode");
     setStyle({ color: "Black", marginRight: "10px" });
     document.body.style.backgroundColor = "white";
     showAlert("I am an alert", "The mode is set to light", "success");
     document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
     <BrowserRouter>
        <Navbarcomp
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          modelabel={modelabel}
          labelColor={style}
        ></Navbarcomp>
        <Alertcomp alert={alert}></Alertcomp>

    <Routes>
          <Route path="/" element={<Textform heading="Enter the text to analyze" showAlert={showAlert}></Textform>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/alert" element={<Alertcomp alert={alert}></Alertcomp>}></Route>
            <Route path="/Navbar" element={<Navbarcomp
              title="TextUtils"
              aboutText="About TextUtils"
              mode={mode}
              toggleMode={toggleMode}
              modelabel={modelabel}
              labelColor={style}
            ></Navbarcomp>}>
          </Route>
    </Routes>
      
      {/* <Navbarcomp></Navbarcomp> */}
      {/* <Alertcomp alert={alert}></Alertcomp>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route> */}
        {/* <Route path="/">
          <Textform heading="Enter the text to analyze" showAlert={showAlert}></Textform>
        </Route>
      </Switch>
      <Alertcomp></Alertcomp>
       <About></About>  */} 
      </BrowserRouter>
    </>
  );
}

export default App;
