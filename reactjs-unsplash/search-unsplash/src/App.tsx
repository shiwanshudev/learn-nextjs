import SearchImage from "./components/SearchImage";
import "./App.css";
import { searchImages } from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term: string) => {
    const images = await searchImages(term);
    setImages(images.results);
    console.log(images.results);
  };
  return (
    <>
      <SearchImage onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
