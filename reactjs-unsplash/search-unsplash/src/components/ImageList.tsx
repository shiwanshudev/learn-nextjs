import ImageShow from "./ImageShow";

type Image = {
  alt_description: string;
  slug: string;
  urls: {
    regular: string;
  };
};
export default function ImageList({ images }: { images: Image[] }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1400px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        gap: "10px",
      }}
    >
      {images.map((image) => (
        <ImageShow
          alt={image.alt_description}
          src={image.urls.regular}
          key={image.slug}
        />
      ))}
    </div>
  );
}
