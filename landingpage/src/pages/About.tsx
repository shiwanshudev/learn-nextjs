import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <Link
        style={{
          background: "blue",
          color: "white",
          fontSize: "18px",
          borderRadius: "5px",
          outline: "none",
          cursor: "pointer",
          padding: "5px",
        }}
        to={"/"}
      >
        Home
      </Link>
    </div>
  );
}
