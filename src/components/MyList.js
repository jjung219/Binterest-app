import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import NavBar from "./NavBar";
import AlbumList from "./Albums/AlbumList";
import AddNewAlbumForm from "./Albums/AddNewAlbumForm";

const MyList = () => {
  const [ albums, setAlbums ] = useState([]);

  useEffect(()=> {
    Axios.get("http://localhost:5000/api/albums")
      .then(res => {
        console.log(res.data)
        setAlbums(res.data);
      })
  }, [])

  function save (newAlbumTitle) {
    console.log("saving new album...")
    const newAlbum = {
      name: newAlbumTitle
    }
    return Axios.post("http://localhost:5000/api/albums/add", newAlbum)
      .then(() => {
        setAlbums([...albums, newAlbum]);
      })
  }

  function deleteAlbum (albumId) {
    const albumToBeDeletedIndex = albums.findIndex(album => albumId === album.id)

    return Axios.delete(`http://localhost:5000/api/albums/${albumId}`)
      .then(() => {
        const albumListDupe = [...albums];
        albumListDupe.splice(albumToBeDeletedIndex, 1);
        setAlbums([...albumListDupe]);
      });

  }

  return (
    <div>
      <NavBar />
      <h1>My Bins</h1>
      <AddNewAlbumForm
        onSubmit={save}
      />
      <AlbumList 
        albums={albums}
        onDelete={deleteAlbum} 
      />
    </div>
  )
}

export default MyList;