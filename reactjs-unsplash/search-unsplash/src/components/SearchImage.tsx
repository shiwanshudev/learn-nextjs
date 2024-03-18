import React, { useState } from "react";
export default function SearchImage({ onSubmit }: { onSubmit: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(searchTerm);
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
