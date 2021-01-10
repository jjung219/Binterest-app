import React from "react";

import AlbumCard from "./AlbumCard";

const AlbumList = (props) => {

  const albums = props.albums.map(album => {
    return (
      <AlbumCard 
        key={album.id}
        id={album.id}
        name={album.name}
        onDelete={props.onDelete}
      />
    )
  })

  return (
    <div>
      {albums}
    </div>
  )
}

export default AlbumList;