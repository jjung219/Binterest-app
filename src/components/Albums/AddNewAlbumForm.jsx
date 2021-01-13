import React, { useState } from "react";

import { Button, Form, Row } from "react-bootstrap";

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
          <Form.Label>
            New Album Title
          </Form.Label>
            <Form.Control onChange={(e)=> setAlbumTitle(e.target.value)} value={albumTitle} type="text" placeholder="New Album Title" />
        </Form.Group>
        <Button type="submit" onClick={submitHandler} variant="primary">Add New Album</Button>
      </Form>

    </div>
  )
}

export default AddNewAlbumForm;