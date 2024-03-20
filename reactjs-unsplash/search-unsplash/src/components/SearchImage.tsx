import React, { useState } from "react";
export default function SearchImage({ onSubmit }: { onSubmit: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "5px",
          width: "57%",
          background: "#eee",
          outline: "none",
          border: "none",
          borderRadius: "5px",
          height: "45px",
          boxSizing: "border-box",
          fontSize: "1.1rem",
        }}
        placeholder="Search Unsplash Here..."
      />
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          fontSize: "1.1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          height: "45px",
        }}
      >
        Search
      </button>
    </form>
  );
}
