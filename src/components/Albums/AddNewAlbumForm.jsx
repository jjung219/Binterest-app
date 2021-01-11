import React, { useState } from "react";

import { Button, Form, Col, Row } from "react-bootstrap";

const AddNewAlbumForm = (props) => {
  const [albumTitle, setAlbumTitle] = useState("")

  function submitHandler (e) {
    e.preventDefault();
    console.log("Submitting new album title..");
    props.onSubmit(albumTitle)
    setAlbumTitle("");
  }

  return (
    <div>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            New Album Title
          </Form.Label>
          <Col sm="10">
            <Form.Control onChange={(e)=> setAlbumTitle(e.target.value)} value={albumTitle} type="text" placeholder="New Album Title" />
          </Col>
        </Form.Group>
        <Button type="submit" onClick={submitHandler} variant="primary">Add New Album</Button>
      </Form>

    </div>
  )
}

export default AddNewAlbumForm;