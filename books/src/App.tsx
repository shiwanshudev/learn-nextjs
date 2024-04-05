import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

interface Book {
  title: string;
  id: number;
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
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
