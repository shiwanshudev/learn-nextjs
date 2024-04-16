import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

export default function BookShow({
  book,
}: {
  book: {
    title: string;
    id: number;
  };
}) {
  const { deleteBookById, editBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => deleteBookById(book.id);
  const handleEditClick = () => setShowEdit(!showEdit);
  const handleSubmit = (id: number, title: string) => {
    editBookById(id, title);
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
