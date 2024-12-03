import { Link, useLoaderData } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const TopReads = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="text-4xl bg-slate-200 text-black container rounded-lg py-5 text-center m-auto font-bold mt-5">
        <h1>Reading Trends</h1>
      </div>
      <div>
        <div className="overflow-x-auto lg:w-3/5 m-auto mt-5  border  border-[#23BE0A] rounded-lg  p-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-bold text-xl">
                <th>Books Name</th>
                <th>Users Reads</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data1) => (
                <tr key={data1.bookId}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={data1.image} // Replace 'imageUrl' with the actual property containing the image URL
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold lg:text-2xl mt-5">
                         
                          <Link
                            className="text-[#23BE0A]  rounded-lg p-1 px-4"
                            to={`/details/${data1.bookId}`}
                          >
                            {data1.bookName}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data1.usersRead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Adjust the height as needed
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="bookName" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="usersRead"
              stroke="#22be0a"
              fill="#22be0aa6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopReads;
  