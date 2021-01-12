import React from 'react';

import AddToAlbumButton from "./AddToAlbumButton";

const ImageCard = (props) => {
  
  return (
    <div>
      <img
        src={props.image.urls.regular}
        alt={props.image.alt_description}
      />
      <AddToAlbumButton 
        albums={props.albums}
        url={props.image.urls.regular}
        description={props.image.alt_description}
      />
    </div>
  )


}

export default ImageCard