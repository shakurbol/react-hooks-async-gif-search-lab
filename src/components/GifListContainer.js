import React, {useEffect, useState} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
import './app.css';

function GifListContainer() {
  const[gifData, setGifData]=useState([])
  const[search, setSearch]=useState("dolphins")

    useEffect(()=>{
      const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=oJ5CrXCR88cGAMgRBZSiMBJRKynVn1fA&rating=g&limit=3`
      fetch(url)
      .then(response=>response.json())
      .then(data=>{
        // const gifs = data.data.map((gif) => ({url:gif.images.original.url}));  
        setGifData(data.data)    
        }) 
      .catch(error=>console.log(error))
    },[search])
console.log(gifData)
   
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <GifList data={gifData}/>
      <GifSearch handleSearch ={setSearch}/>

      
    </div>
  )
}

export default GifListContainer;