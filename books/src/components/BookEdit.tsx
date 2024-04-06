import { useState } from "react";
interface Book {
  title: string;
  id: number;
}
export default function BookEdit({
  book,
  onSubmit,
}: {
  book: Book;
  onSubmit: (id: number, title: string) => void;
}) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label htmlFor="input">Title</label>
      <input
        type="text"
        className="input"
        id="input"
        onChange={handleChange}
        value={title}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}
