import BookShow from "./BookShow";

interface Book {
  title: string;
  id: number;
}
export default function BookList({ books }: { books: Book[] }) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}
