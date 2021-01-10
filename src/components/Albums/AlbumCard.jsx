import React from "react";

import { Card, Button } from "react-bootstrap";

const AlbumCard = (props) => {

  const albumId = props.id;
  const deleteHandler = () => {
    console.log("Deleting album");
    props.onDelete(albumId);
    
  }


  return (
    <div>
      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Text>
          <Card.Title>{props.name}</Card.Title>
          <Button variant="outline-secondary">
            <a href={`/list/${props.id}`}>View</a>
          </Button>
          <Button 
            variant="outline-danger"
            onClick={deleteHandler}
          >
            Delete
          </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AlbumCard;