import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Bookcard = ({ book }) => {
  const { image, author, bookName, bookId, category, rating, tags } = book;
  return (
    <div>
      <Link to={`details/${bookId}`}>
        <div className="card  bg-base-300 shadow-xl p-6">
          <figure className="h-56 w-full bg-white rounded-lg p-2">
            <img src={image} alt="Shoes" className="h-full" />
          </figure>
          <div className=" py-4 space-y-3">
            <div className="flex gap-2">
              {tags.map((tag, i) => (
                <h1
                  key={i}
                  className="text-[#23BE0A] bg-white rounded-full p-1 px-2"
                >
                  {tag}
                </h1>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p className="text-base-700">By :{author}</p>
            <div className="card-actions border-t border-dashed border-gray-400 py-2 flex items-center justify-between">
              <h1 className="text-base-700">{category}</h1>
              <h1 className="flex items-center gap-2 ">
                {rating}{" "}
                <p className="text-xl">
                  <FaRegStar />
                </p>
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
  
 }


export default Bookcard;
