import SearchImage from "./components/SearchImage";
import "./App.css";
import { searchImages } from "./api";
import { useState } from "react";
type Image = {
  slug: string;
  urls: {
    regular: string;
  };
};

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term: string) => {
    const images = await searchImages(term);
    setImages(images.results);
  };
  return (
    <>
      <SearchImage onSubmit={handleSubmit} />
      {images.map((image: Image) => (
        <img alt={image.slug} src={image.urls.regular} key={image.slug} />
      ))}
    </>
  );
}

export default App;
