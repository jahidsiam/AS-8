import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { RiBookOpenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const WishCard = ({ book }) => {

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
  return (
    <div>
      <div className="card flex-col lg:w-[70vw] border p-5 m-auto lg:flex-row items-center card-side bg-base-100 shadow-xl mt-5">
        <figure className="lg:h-80  ">
          <img src={image} alt="Movie" className="h-full" />
        </figure>
        <div className=" p-10 space-y-2 w-full">
          <h2 className=" font-bold text-4xl">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex flex-col  text-left lg:flex-row lg:space-x-7 gap-4">
            
            <div className="flex gap-2 items-center">
            <span className="font-bold">tag :</span>
              {tags.map((tag, i) => (
                <h1
                  key={i}
                  className="text-[#23BE0A] bg-gray-200 rounded-full p-1 px-2"
                >
                  {tag}
                </h1>
              ))}
            </div>
            <div className="text-base flex items-center space-x-2">
              <CiLocationOn className="text-2xl" />
              <h1>Year of Publishing: {yearOfPublishing}</h1>
            </div>
          </div>
          <div className="flex flex-col text-left lg:flex-row lg:space-x-7 gap-4">
            <h1 className="flex items-center gap-3">
              <FaUserFriends className="text-2xl" />
              Publisher: {publisher}
            </h1>
            <h1 className="flex items-center gap-3">
              <RiBookOpenLine className="text-2xl" />
              Page : {totalPages}
            </h1>
          </div>
          <div className=" flex flex-col text-center lg:flex-row  rounded-full gap-4">
            <h1 className="p-1 text-[#328EFF] bg-[#328eff60] rounded-full px-4">
              Category: {category}
            </h1>
            <h1 className="p-1 text-[#FFAC33] bg-[#ffad3338] rounded-full px-4">
            Rating: {rating}
            </h1>
            <Link to={`/details/${bookId}`}>
            <button className="p-1 px-4  bg-[#23BE0A] text-white font-bold rounded-full">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
