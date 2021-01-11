import React, { Fragment } from 'react';
import Axios from 'axios';

import { DropdownButton, Dropdown } from 'react-bootstrap';

const AddToAlbumButton = props => {
  const albumNames = props.albums.map(album => {
    return (
      <Fragment>
        <Dropdown.Item 
          key={album._id} 
          href="#/action-1"
          onClick={() => clickHandler(album._id)}
        >
          {album.name}
        </Dropdown.Item>
      </Fragment>
    )
  })

  function clickHandler (albumId) {
    const newImage = {
      album_id: albumId,
      description: props.alt,
      url: props.src
    }

    return Axios.post("http://localhost:5000/api/images/add", newImage)
      .then(() => console.log("Image Added to album!"))
      .catch((err)=> console.log("Error: ", err))
  }

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Add to Album">
        {albumNames}
      </DropdownButton>
    </div>
  )
}

export default AddToAlbumButton;