import React from 'react';

import NavBar from "../NavBar";

const AlbumPhotos = props => {
  
  console.log(props)
  return (
    <div>
      <NavBar />
      {props.match.params.id}
    </div>
  )

};

export default AlbumPhotos;