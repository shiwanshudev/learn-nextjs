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

  const editBookById = (id: number, title: string) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      } else {
        return book;
      }
    });
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };
  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
