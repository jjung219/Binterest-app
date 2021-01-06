import React, { useState } from 'react';
import axios from 'axios';

import NavBar from "./NavBar";
import SearchBar from './SearchBar';
import ImageList from './ImageList';



const Home = () => {
  const [ images, setImages ] = useState([]);

  const onSearchSubmit = async (term) => {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: term },
          headers: {
              Authorization: 'Client-ID HogGshsiM9hbZC7IBAJ1opNRJb9aWwQEoEVrCsxxYq8'
          }
      })
      setImages(response.data.results)
  }


  return (
      <div>
        <NavBar />
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList images={images} />
      </div>
  )


}

export default Home;