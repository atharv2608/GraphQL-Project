import React from "react";
import { Link } from "react-router-dom";

function Card({
  id,
  title = "Post Title",
  body = "Post body",
  userId = "userId",
  userName= "username"
}) {
  return (
    <div className=" flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex-grow">
        <span href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        <Link to={`/user/${userId}`} className="text-indigo-500">Posted by: {userName}</Link>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
      </div>
      <div className="max-w-sm">
        <Link
          to={`/comments/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Comments
        </Link>
      </div>
    </div>
  );
}

export default Card;
