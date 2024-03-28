import { useState, ChangeEvent, FormEvent } from "react";
export default function BookCreate({
  onCreate,
}: {
  onCreate: (title: string) => void;
}) {
  const [title, setTitle] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(title);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
