import React from 'react'
import './app.css';
function GifList({data}) {
    // console.log(data)
  return (
    <div>
        <ul>
            {data.map((gif)=>(
                <li key={gif.url}>
                    <img src={gif.images.original.url} alt="gif" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GifList;