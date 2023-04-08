import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";


function About() {

  const [myStyle, setMyStyle] = useState( {color:'white',
     backgroundColor:"black"})
  // let myStyle={
  //    color:'white',
  //    backgroundColor:"black"
  // }
  const [btnText,setbtnText]= useState("Enable Light Mode")
const toggleStyle = ()=>{
  if(myStyle.color === 'white'){
    setMyStyle({
      
        color:"black",
        backgroundColor: "white",
        
      
    })
    setbtnText("Enable Dark Mode")
  }
  else{
     setMyStyle({
       color: "white",
       backgroundColor: "black",
       
     });
setbtnText("Enable Light Mode");
  }
}

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3"> About US</h1>
        <Accordion defaultActiveKey="0" style={myStyle}>
          <Accordion.Item eventKey="0" style={myStyle}>
            <Accordion.Header style={myStyle}>
              Accordion Item #1
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={myStyle}>
            <Accordion.Header style={myStyle}>
              Accordion Item #2
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={myStyle}>
            <Accordion.Header style={myStyle}>
              Accordion Item #3
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Added newly for 3rd Accordion
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="container my-3" style={myStyle}>
        <Button onClick={toggleStyle} variant="primary">{btnText}</Button>
      </div>
    </>
  );
}

export default About
