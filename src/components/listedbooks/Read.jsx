import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../util/localStorage";
import WishCard from "./WishCard";
import { useContext } from "react";
import Context from "../../context/readcontext";

const Read = () => {
  const allBooks = useLoaderData();
  const data = getStoredRead();

  const sortValue = useContext(Context);
  console.log(sortValue);

  // const sortedBooks = books.sort((a, b) => b.rating - a.rating);
  // console.log(sortedBooks)
const books =  allBooks.filter((book) => data.includes(book.bookId));
  let finalbooks = []; 
  if (sortValue === "") {
    finalbooks = books;
  }else if(sortValue === "Rating"){
    finalbooks = books.sort((a, b) => b.rating - a.rating);
  }else if(sortValue === "Number of pages"){
    finalbooks = books.sort((a, b) => b.totalPages - a.totalPages);
  }else if(sortValue === "Publisher year"){
    finalbooks = books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }

  return (
    <div className="container m-auto mt-6 space-y-3">
      {finalbooks.map((book, i) => (
        <WishCard key={i} book={book} />
      ))}
    </div>
  );
};


export default Read;
