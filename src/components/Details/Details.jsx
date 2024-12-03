import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReadContext from "../../context/readcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToRead,
  addToWishlist,
  getStoredRead,
  getWishlist,
  saveWishlist,
} from "../../util/localStorage";

const Details = () => {
  const data = useLoaderData();
  const id = parseInt(useParams().id);
  const book = data?.find((book) => book.bookId === id);
  const {
    image,
    author,
    bookName,
    bookId,
    category,
    rating,
    tags,
    review,
    publisher,
    totalPages,
    yearOfPublishing,
  } = book;
  const { read, setRead } = useContext(ReadContext);

  const notifyError4 = () => {
    toast.error("This book is already in Read list.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifyError3 = () => {
    toast.error("This book is already in Wish list.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifysuc = () => {
    toast.success("Book added to wish list", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifysuc2 = () => {
    toast.success("Book added to your Read list.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const wishEventHandler = () => {
    if (getWishlist().includes(bookId)) {
      notifyError3();
    } else if (getStoredRead().includes(bookId)) {
      notifyError4();
    } else {
      addToWishlist(bookId);
      notifysuc();
    }
  };

  const readEventHandler = () => {
    const storedRead = getStoredRead();
    const storedWishlist = getWishlist();

    if (storedRead.includes(bookId)) {
      notifyError4();
    } else if (storedWishlist.includes(bookId)) {
      const updatedWishlist = storedWishlist.filter((item) => item !== bookId);
      console.log(storedWishlist);
      saveWishlist(updatedWishlist);
      notifysuc2();
      addToRead(bookId)
    } else {
      notifysuc2();
      addToRead(bookId);
    }
  };

  console.log(getStoredRead(), getWishlist());

  return (
    <div>
      <div className="card lg:card-side  bg-base-100 grid lg:grid-cols-2">
        <figure className="px-20">
          <img src={image} alt="Album" />
        </figure>
        <div className=" p-10 ">
          <h2 className="card-title text-4xl font-bold text-black">
            {bookName}
          </h2>
          <p className="pb-3 border-b-2  border-gray-300">by : {author}</p>
          <p className="p-3 border-b-2  border-gray-300">{category}</p>
          <p className="p-3 ">
            {" "}
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="flex p-3 gap-2  border-b-2  border-gray-300">
            {tags.map((tag, i) => (
              <h1
                key={i}
                className="text-[#23BE0A] bg-gray-200 rounded-full p-1 px-2"
              >
                {tag}
              </h1>
            ))}
          </div>
          <table className="w-2/3">
            <tbody>
              <tr>
                <td>Number of Pages:</td>
                <td className="font-bold">{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="font-bold">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td className="font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td className="font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>

          <div className="card-actions mt-4">
            <button
              onClick={() => readEventHandler()}
              className="btn text-gray-500 border-2 border-gray-500 text-base"
            >
              Read
            </button>
            <button
              onClick={() => wishEventHandler()}
              className="btn bg-[#50B1C9]"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
