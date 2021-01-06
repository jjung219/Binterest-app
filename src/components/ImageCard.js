import React from 'react'

import AddToAlbumButton from "./AddToAlbumButton";

const ImageCard = (props) => {

  return (
    <div>
      <img
        src={props.image.urls.regular}
        alt={props.image.alt_description}
      />
      <AddToAlbumButton />
    </div>
  )


}

export default ImageCard