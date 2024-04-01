import { useState } from "react";
import BookCreate from "./components/BookCreate";

interface Book {
  title: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const createBook = (title: string) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
