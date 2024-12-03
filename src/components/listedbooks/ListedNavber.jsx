import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ListedNavber = () => {
  const [active, setActive] = useState(0);

  const location = useLocation();


  const handleSetActive = (index) => {
    setActive(index);
  };
  useEffect(() => {
    if(location.pathname.includes("/wish")){
      handleSetActive(1)
    }
  }, [location]);
  return (
    <div>
      <div className="container m-auto mt-9 px-7">
        <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-stretch  flex-nowrap ">
          <Link
            onClick={() => handleSetActive(0)}
            to=""
            className={`flex items-start ${
              active === 0
                ? "border border-b-0 rounded-t-lg font-bold "
                : "border-b "
            } px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
          >
            <span>Read Books</span>
          </Link>
          <Link
            onClick={() => handleSetActive(1)}
            to="wish"
            className={`flex items-start ${
              active === 1
                ? "border border-b-0 rounded-t-lg  font-bold"
                : "border-b "
            } px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
          >
            <span>Wishlist Books</span>
          </Link>

          <span className="flex cursor-default items-start flex-1 px-5 py-3 space-x-2  border-b rounded-t-lg dark:border-gray-600  text-white">
            erwer
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListedNavber;
