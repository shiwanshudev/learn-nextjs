interface Book {
  title: string;
  id: number;
}

export default function BookShow({
  book,
  onDelete,
}: {
  book: Book;
  onDelete: (id: number) => void;
}) {
  const handleDelete = () => onDelete(book.id);
  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
