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
  const handleSubmit = (id: number, title: string) => {
    onEdit(id, title);
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
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
