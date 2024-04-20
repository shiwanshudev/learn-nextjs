import React, { createContext, useCallback, useState } from "react";
import axios from "axios";
interface BooksContextType {
  books: Book[];
  createBook: (title: string) => void;
  editBookById: (id: number, title: string) => void;
  deleteBookById: (id: number) => void;
  fetchBooks: () => void;
}
const BooksContext = createContext<BooksContextType | undefined>(undefined);

interface Book {
  title: string;
  id: number;
}
function Provider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id: number, title: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);
  const contextValue: BooksContextType = {
    books,
    createBook,
    editBookById,
    deleteBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
