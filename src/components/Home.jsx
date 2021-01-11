import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import NavBar from "./NavBar";
import SearchBar from './SearchBar';
import ImageList from './ImageList';



const Home = () => {
  const [ images, setImages ] = useState([]);
  const [albumList, setAlbumList] = useState([]);

  const onSearchSubmit = async (term) => {
      const response = await Axios.get('https://api.unsplash.com/search/photos', {
          params: { query: term },
          headers: {
              Authorization: 'Client-ID HogGshsiM9hbZC7IBAJ1opNRJb9aWwQEoEVrCsxxYq8'
          }
      })
      setImages(response.data.results)
  }

  
  useEffect(() => {
    Axios.get("http://localhost:5000/api/albums")
    .then(res => {
      const albums = res.data;
      setAlbumList(albums);
    })

  }, []) 


  return (
      <div>
        <NavBar />
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList 
          images={images}
          albums={albumList}
        />
      </div>
  )


}

export default Home;