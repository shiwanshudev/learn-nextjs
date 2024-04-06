import { useState } from "react";
import BookEdit from "./BookEdit";

interface Book {
  title: string;
  id: number;
}

export default function BookShow({
  book,
  onDelete,
  onEdit,
}: {
  book: Book;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => onDelete(book.id);
  const handleEditClick = () => setShowEdit(!showEdit);

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onEdit={onEdit} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
