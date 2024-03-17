import React, { useState } from "react";
export default function SearchImage() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
