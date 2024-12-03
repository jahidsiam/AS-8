import { Outlet } from "react-router-dom";
import ListedNavber from "./ListedNavber";
import { useState } from "react";
import Context from "../../context/readcontext";

const Listedbooks = () => {
  const [sortBy, setSortBy] = useState("");

 
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  console.log(sortBy);

  return (
    <div>
      <div className="text-4xl bg-slate-200 text-black container rounded-lg py-5 text-center m-auto font-bold mt-5">
        <h1>Books</h1>
      </div>
      <div className="text-center mt-7">
        <select
          className="select select-bordered font-bold text-white bg-[#23BE0A] max-w-xs"
          value={sortBy} 
          onChange={handleSortByChange} 
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="Rating">Rating</option>
          <option value="Number of pages">Number of pages</option>
          <option value="Publisher year">Publisher year</option>
        </select>
      </div>
      <Context.Provider value={sortBy}>
        <ListedNavber />
        <Outlet />
      </Context.Provider>
    </div>
  );
};

export default Listedbooks;
