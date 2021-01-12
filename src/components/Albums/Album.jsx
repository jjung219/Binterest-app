import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import NavBar from "../NavBar";
import AddNewImageForm from "./AddNewImageForm";
import AlbumImageList from "./AlbumImageList";

const Album = props => {
  const [album, setAlbum] = useState({});
  const [images, setImages] = useState([]);
  const albumId = props.match.params.id;
  
  const albumAPI = `https://binterest-jj.herokuapp.com/api/albums/${albumId}`;
  const imagesAPI = `https://binterest-jj.herokuapp.com/api/albums/${albumId}/images`;

  useEffect(() => {
    Promise.all([
      Axios.get(albumAPI),
      Axios.get(imagesAPI)
    ]).then(all => {
      const [ albumData, imagesData ] = all;
      console.log("Album: ", albumData.data);
      console.log("Images: ",imagesData.data);
      setAlbum(albumData.data);
      setImages(imagesData.data);
    })
  }, [albumAPI, imagesAPI]);
  
  function deleteImage (imageId) {
    console.log("deleting image")
    const imageIndex = images.findIndex(image => image._id === imageId);
    console.log("imageIndex: ", imageIndex);

    return Axios.delete(`https://binterest-jj.herokuapp.com/api/images/${imageId}`)
      .then(() => {
        console.log("Image Revmoed from album!")
        const imagesStateDupe = [...images];
        imagesStateDupe.splice(imageIndex, 1);
        setImages([...imagesStateDupe]);
      });
  };

  return (
    <div>
      <NavBar />
      <h1>{album.name}</h1>
      <AddNewImageForm/>
      <AlbumImageList 
        images={images}
        onDelete={deleteImage}
      />
    </div>
  )
};

export default Album;