import React from "react";
import memesData from "../memesData"

export default function Meme() {
  const [image, setImage] = React.useState("")

  function getMemeImage() {
    const memes = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memes.length)
    setImage(memes[randomNumber].url)
  }

  return (
    <div className="meme">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
        />
        <button
          onClick={getMemeImage}
          className="form-button"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-image">
        <img src={image} className="meme-image" />
      </div>
    </div>
  )
}
