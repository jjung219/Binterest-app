import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import SearchBar from './Home/SearchBar';
import ImageList from './Home/ImageList';

import "./Home.scss";

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
    Promise.all([
      Axios.get("https://binterest-jj.herokuapp.com/api/albums"),
      Axios.get('https://api.unsplash.com/search/photos', {
          params: { query: "flowers" },
          headers: {
              Authorization: 'Client-ID HogGshsiM9hbZC7IBAJ1opNRJb9aWwQEoEVrCsxxYq8'
          }
      })
    ]).then(all => {
      const [ albums , defaultImages ] = all;
      console.log(defaultImages.data)
      setAlbumList(albums.data);
      setImages(defaultImages.data.results);
    })
  }, []) 


  return (
      <div>
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList 
          images={images}
          albums={albumList}
        />
      </div>
  )


}

export default Home;