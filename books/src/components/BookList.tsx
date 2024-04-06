import BookShow from "./BookShow";

interface Book {
  title: string;
  id: number;
}
export default function BookList({
  books,
  onDelete,
}: {
  books: Book[];
  onDelete: (id: number) => void;
}) {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} onDelete={onDelete} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}
