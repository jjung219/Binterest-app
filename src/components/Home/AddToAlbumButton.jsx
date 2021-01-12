import React from 'react';
import Axios from 'axios';

import DropDownItem from "./DropDownItem";

import { DropdownButton } from 'react-bootstrap';

const AddToAlbumButton = props => {
  const albumNames = props.albums.map(album => {
    return (
      <DropDownItem
        album={album}
        key={album._id}
        id={album._id}
        name={album.name}
        onClick={clickHandler}
      />
    )
  })

  function clickHandler (albumId) {
    console.log("adding image to album")
    console.log("album id: ", albumId)
    
    const newImage = {
      album_id: albumId,
      description: props.description,
      url: props.url
    }
    console.log(newImage)

    return Axios.post("https://binterest-jj.herokuapp.com/api/images/add", newImage)
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