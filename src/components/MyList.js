import React, { useState } from 'react';

import NavBar from "./NavBar";
import AlbumList from "./Albums/AlbumList";
import AddNewAlbumForm from "./Albums/AddNewAlbumForm";

const albumsData = [ 
  {
    id:1,
    title: 'flowers',
    images: [{
      id: "1",
      alt_description: "orange petaled flowers",
      urls: { regular: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNTE0MTN8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080"}
    },
    {
      id: "2",
      alt_description: "flower 2",
      urls: { regular: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNTE0MTN8MHwxfHNlYXJjaHwyfHxmbG93ZXJzfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080"}
    }]
  },
  {
    id:2,
    title: 'logos',
    images: []
  }
]

const MyList = () => {
  const [ albums, setAlbums ] = useState(albumsData);

  let randomId = Math.random().toString(36).substr(2, 15);
  
  const save = (newAlbumTitle) => {
    const newAlbum = {
      id: randomId,
      title: newAlbumTitle,
      images:[]
    }
    setAlbums([...albums, newAlbum]);
  }

  const deleteAlbum = (albumId) => {
    const albumToBeDeletedIndex = albums.findIndex(album => albumId === album.id)

    const albumsList = [...albums];
    albumsList.splice(albumToBeDeletedIndex, 1);
    setAlbums([...albumsList]);
  }


  return (
    <div>
      <NavBar />
      <AlbumList 
        albums={albums}
        onDelete={deleteAlbum} 
      />
      <AddNewAlbumForm
        onSubmit={save}
      />
    </div>
  )
}

export default MyList;