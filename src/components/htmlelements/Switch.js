// import { useState } from "react";
import Form from "react-bootstrap/Form";

function Switch(props) {
    // const customStyle={
    //     color:"white"
    // }
    console.log(props);
    
  return (
    <Form>
      <Form.Check
        onClick={props.onClick}
        type="switch"
        id="custom-switch"
        label={`${props.modelabel}`}
        style={props.labelColor}
      />
      {/* <Form.Check
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      /> */}
    </Form>
  );
}

export default Switch;
