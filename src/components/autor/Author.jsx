import { Link, useLoaderData } from "react-router-dom";

const Author = () => {
  const datas = useLoaderData();
  console.log(datas);

  return (
    <div>
      <div className="text-4xl bg-slate-200 text-black container rounded-lg py-5 text-center m-auto font-bold mt-5 mb-7">
        <h1>Writers</h1>
      </div>
      {datas.map((data) => (
        <div className="hero " key={data.bookId}>
          <div className="flex items-center container m-auto w-[100%] flex-col lg:flex-row">
            <div className="w-[50%]">
              <img
                src={data.authorImage}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <div className="  px-16  py-10 m-auto">
                <div className=" w-full flex ">
                  <div className="bg-[#262b25] py-6 w-4"></div>
                  <div className="  ml-5 text-[#23BE0A] md:text-5xl text-3xl font-bold lobster lobster ">
                    {data.authorName}
                  </div>
                </div>
                <div className="font-bold lg:text-2xl mt-5">
                  writed Book :{" "}
                  <Link
                    className="bg-[#23BE0A] text-white rounded-lg p-1 px-4"
                    to={`/details/${data.bookId}`}
                  >
                    {data.bookName}
                  </Link>
                </div>
                <div className="text-xl mt-5 ">{data.authorDescription}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Author;
