import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function Alertcomp(props) {
   const [show, setShow] = useState(true);
  if (show) {
    return (
      props.alert &&
      <Alert variant={props.alert.type} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.alert.heading}</Alert.Heading>
        <p>
         {props.alert.msg}
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Alertcomp
