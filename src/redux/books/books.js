import { useState, React } from 'react';

const Books = () => {
  const [books] = useState([
    { id: 1, title: 'book 1' },
    { id: 2, title: 'book 2' },
  ]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <li key={book.title}>{book.title}</li>
            <button key={book.id} type="button">
              remove
            </button>
          </div>
        ))}
      </ul>
      <form>
        <input type="text" name="bookName" />
      </form>
    </div>
  );
};

export default Books;
