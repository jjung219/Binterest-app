import React from 'react'
import { Card, Button }from 'react-bootstrap';

const AlbumImageCard = (props) => {

  function deleteHandler () {
    console.log("ImageId: ", props.id)
    props.onDelete(props.id)
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image.url} alt={props.image.description}/>
        <Card.Body>
          <Card.Text>{props.image.description}</Card.Text>
          <Button 
          variant="outline-danger"
          onClick={deleteHandler}
        >
          Delete
        </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AlbumImageCard;