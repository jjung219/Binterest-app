import React from 'react';

import AddToAlbumButton from "./AddToAlbumButton";

import "./ImageCard.scss"

const ImageCard = (props) => {
  
  return (
    <div className="image-card">
      <img
        src={props.image.urls.regular}
        alt={props.image.alt_description}
      />
      <AddToAlbumButton
        className="add-to-album-button"
        albums={props.albums}
        url={props.image.urls.regular}
        description={props.image.alt_description}
      />
    </div>
  )


}

export default ImageCard