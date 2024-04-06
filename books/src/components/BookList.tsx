import BookShow from "./BookShow";

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
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}
