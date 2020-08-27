import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div className="navbar">
      <h1> Ozgur Reading List</h1>
      <p>Currently You Have {books.length} Books to Read...</p>
    </div>
  );
};

export default Navbar;
