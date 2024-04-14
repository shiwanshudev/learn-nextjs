import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

interface Book {
  title: string;
  id: number;
}
export default function BookList({
  books,
  onDelete,
  onEdit,
}: {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
  ));

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>
      {renderedBooks}
    </div>
  );
}
