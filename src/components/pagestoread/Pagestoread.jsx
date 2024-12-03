import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../util/localStorage";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Pagestoread = () => {
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const allBooks = useLoaderData();
  const data = getStoredRead();

  // Filter books based on stored read IDs
  const books = allBooks.filter((book) => data.includes(book.bookId));

  // Prepare data for BarChart
  const chartData = books.map((book, index) => ({
    bookName: book.bookName, // Assuming this is the property for book name
    totalPages: book.totalPages, // Assuming this is the property for total pages
    color: colors[index % colors.length], // Assigning color based on index
  }));

  return (
    <div className="mt-7 min-h-screen" style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pagestoread;
