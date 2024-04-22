import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

export default function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}
