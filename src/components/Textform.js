import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Textform(props) {
  const handleUpClick = () => {
    //console.log("Button Uppercase Clicked");
    //setText("You have clicked on handleUpClick")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(
      "I am an alert",
      "The text is modified to Uppercase",
      "success"
    );
  };
   const handleDownClick = () => {
     //console.log("Button Uppercase Clicked");
     //setText("You have clicked on handleUpClick")
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("I am an alert", "The text is modified to lowercase", "success");
      
   };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
   const handleClear = (event) => {
    let newText = "";
     setText(newText);
     props.showAlert(
       "I am an alert",
       "The text cleared",
       "success"
     );
   };
  const [text, setText] = useState("Enter text here");
  //setText("New Text");
  return (
    <>
      <div className="container"></div>
      <div className="container my-3">
        <h1>{props.heading} </h1>
        <FloatingLabel controlId="floatingTextarea2" label="Enter your text below">
          <Form.Control
            as="textarea"
            value={text}
            onChange={handleOnChange}
            placeholder="Leave a comment here"
            style={{ height: "300px" }}
          />
        </FloatingLabel>

        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>
          Clear the text area
        </button>
      </div>
      <div className="container my-2">
        <h1> Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview or modify here"}</p>
      </div>
    </>
  );
}

export default Textform;
