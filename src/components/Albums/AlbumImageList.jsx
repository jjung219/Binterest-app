import React from 'react'
import AlbumImageCard from './AlbumImageCard'

const AlbumImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <AlbumImageCard 
        key={image._id}
        id={image._id} 
        image={image}
        onDelete={props.onDelete}
      />
      )
  })
  return (
    <div className="image-list">{images}</div>
  )
}

export default AlbumImageList;