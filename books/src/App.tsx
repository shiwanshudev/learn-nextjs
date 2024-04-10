import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

interface Book {
  title: string;
  id: number;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
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
    setBooks(updatedBooks);
  };
  const deleteBookById = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
