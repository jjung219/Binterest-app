import React, { useState } from "react";

import { Button, Form, Col, Row } from "react-bootstrap";

const AddNewAlbumForm = (props) => {
  const [ newImageURL, setNewImageURL ] = useState("")
  const [ newImageDescription, setNewImageDescription ] = useState("")

  function submitHandler (e) {
    e.preventDefault();
    console.log("Submitting new image..");
    props.onAdd(newImageURL, newImageDescription, props.album._id);
    setNewImageDescription("");
    setNewImageURL("");
  }

  return (
    <div>
      <Form>
        <h4>Add new Image</h4>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e)=> setNewImageDescription(e.target.value)} value={newImageDescription} type="text" placeholder="Image Description" />
          </Col>
          <Form.Label column sm="2">
            URL
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              onChange={(e)=> setNewImageURL(e.target.value)} value={newImageURL} type="text" placeholder="New Image URL" 
            />
          </Col>
        </Form.Group>
        <Button type="submit" onClick={submitHandler} variant="primary">Add New Image</Button>
      </Form>

    </div>
  )
}

export default AddNewAlbumForm;