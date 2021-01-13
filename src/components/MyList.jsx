import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import AlbumList from "./Albums/AlbumList";
import AddNewAlbumForm from "./Albums/AddNewAlbumForm";

import "./MyList.scss"

const MyList = () => {
  const [ albums, setAlbums ] = useState([]);

  useEffect(()=> {
    Axios.get("https://binterest-jj.herokuapp.com/api/albums")
      .then(res => {
        console.log(res.data)
        setAlbums(res.data);
      })
  }, [albums])

  function save (newAlbumTitle) {
    console.log("saving new album...")
    const newAlbum = {
      name: newAlbumTitle
    }
    return Axios.post("https://binterest-jj.herokuapp.com/api/albums/add", newAlbum)
      .then(() => {
        setAlbums([...albums, newAlbum]);
      })
  }

  function deleteAlbum (albumId) {
    const albumToBeDeletedIndex = albums.findIndex(album => albumId === album._id)

    return Axios.delete(`https://binterest-jj.herokuapp.com/api/albums/${albumId}`)
      .then(() => {
        const albumListDupe = [...albums];
        albumListDupe.splice(albumToBeDeletedIndex, 1);
        setAlbums([...albumListDupe]);
      });

  }

  return (
    <div className="my-bins">
      <h1>My Bins</h1>
      <div className="album-list">
        <AddNewAlbumForm
          className="form"
          onSubmit={save}
        />
        <AlbumList
          albums={albums}
          onDelete={deleteAlbum} 
        />
      </div>
    </div>
  )
}

export default MyList;