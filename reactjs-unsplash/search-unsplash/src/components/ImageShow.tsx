export default function ImageShow({ alt, src }: { alt: string; src: string }) {
  return (
    <div>
      <p style={{ textTransform: "capitalize" }}>{alt}</p>
      <img
        src={src}
        alt={alt}
        style={{ width: "350px", height: "350px", objectFit: "cover" }}
      />
    </div>
  );
}
