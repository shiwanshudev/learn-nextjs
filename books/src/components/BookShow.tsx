interface Book {
  title: string;
  id: number;
}

export default function BookShow({ book }: { book: Book }) {
  return <div className="book-show">{book.title}</div>;
}
