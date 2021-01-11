import React, { useState } from "react";

import { Button, Form, Col, Row } from "react-bootstrap";

const AddNewAlbumForm = (props) => {
  const [ newImageURL, setNewImageURL ] = useState("")
  const [ newImageDescription, setNewImageDescription ] = useState("")

  function submitHandler (e) {
    e.preventDefault();
    console.log("Submitting new image..");
    // props.onSubmit(albumTitle)
    // setAlbumTitle("");
  }

  return (
    <div>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            New Image Name
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              onChange={(e)=> setNewImageURL(e.target.value)} value={newImageURL} type="text" placeholder="New Image URL" 
            />
            <Form.Control onChange={(e)=> setNewImageDescription(e.target.value)} value={newImageDescription} type="text" placeholder="Image Description" />
          </Col>
        </Form.Group>
        <Button type="submit" onClick={submitHandler} variant="primary">Add New Image</Button>
      </Form>

    </div>
  )
}

export default AddNewAlbumForm;