import { useContext } from "react";
import BooksContext from "../context/books";
interface Book {
  title: string;
  id: number;
}
interface BooksContextType {
  books: Book[];
  createBook: (title: string) => void;
  editBookById: (id: number, title: string) => void;
  deleteBookById: (id: number) => void;
  fetchBooks: () => void;
}
function useBooksContext(): BooksContextType {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
}

export default useBooksContext;
