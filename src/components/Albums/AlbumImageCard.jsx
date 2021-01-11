import React from 'react'
import { Card }from 'react-bootstrap';

const AlbumImageCard = (props) => {

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image.url} alt={props.image.description}/>
        <Card.Body>
          <Card.Title>{props.image.description}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AlbumImageCard