import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import NavBar from "../NavBar";
import AddNewImageForm from "./AddNewImageForm";
import AlbumImageList from "./AlbumImageList";

const Album = props => {
  const [album, setAlbum] = useState({});
  const [images, setImages] = useState([]);
  const albumId = props.match.params.id
  
  const albumAPI = `http://localhost:5000/api/albums/${albumId}`;
  const imagesAPI = "http://localhost:5000/api/images";

  useEffect(() => {
    Promise.all([
      Axios.get(albumAPI),
      Axios.get(imagesAPI)
    ]).then(all => {
      const [ albumData, imagesData ] = all;
      console.log(imagesData.data);
      console.log(albumData.data);
      setAlbum(albumData.data);
      setImages(imagesData.data);
    })
  }, [albumAPI, images])
  
  const imagesStateDupe = [...images]
  const filteredImages = imagesStateDupe.filter(image => image.album_id === albumId)
  console.log("filtered: ", filteredImages)

  return (
    <div>
      <NavBar />
      <h1>{album.name}</h1>
      <AddNewImageForm
      />
      <AlbumImageList images={filteredImages}/>
      
    </div>
  )

};

export default Album;