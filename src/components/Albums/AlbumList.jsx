import React from "react";

import AlbumCard from "./AlbumCard";

const AlbumList = (props) => {

  const albums = props.albums.map(album => {
    return (
      <AlbumCard 
        key={album._id}
        id={album._id}
        name={album.name}
        onDelete={props.onDelete}
      />
    )
  })

  return (
    <div className="albums">
      {albums}
    </div>
  )
}

export default AlbumList;