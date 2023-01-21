import React from "react";
import memesData from "../memesData"

export default function Meme() {
  // const [image, setImage] = React.useState("http://i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memes = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memes.length)
    const url = memes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
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
        <img src={meme.randomImage} className="meme-image" />
      </div>
    </div>
  )
}
