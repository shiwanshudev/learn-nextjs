export default function ImageShow({ alt, src }: { alt: string; src: string }) {
  return (
    <div style={{ width: "350px" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "350px", height: "350px", objectFit: "cover" }}
      />
      <p style={{ textTransform: "capitalize", fontSize: "0.90rem" }}>{alt}</p>
    </div>
  );
}
