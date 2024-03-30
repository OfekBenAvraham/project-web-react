import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Forum = ({ isDarkMode }) => {
  const { categoryId } = useParams();
  const [posts, setPosts] = useState([]);
  let category = null;

  useEffect(() => {
    fetch(`https://project-web-psi.vercel.app/category/${categoryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        category = data;
        fetch("https://project-web-psi.vercel.app/post/category/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: category.name }),
        })
          .then((response) => response.json())
          .then((data) => {
            setPosts(data);
          })
          .catch((error) => console.error("Error fetching posts:", error));
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [categoryId]);

  return (
    <div className={`container mx-auto min-h-screen mt-12 p-6 dark:bg-gray-800`}>
      <div className="text-center p-10 items-center ">
        <Link
          to={`../CreatePost/${categoryId}`}
          className="cursor-pointer m- bg-orange-light hover:bg-orange-100 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center border border-orange-500 mt-4 transition-colors duration-300 dark:bg-neutral-800 dark:text-zinc-100"
        >
          <svg
            className="h-8 w-8 text-orange-500 transition-colors duration-300"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Create new post
        </Link>
      </div>
      <div
        id="Projects"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {posts.map((post) => (
          <div
            key={post._id}
            className={`w-72 bg-white shadow-md rounded-xl justify-center  mx-auto duration-500 hover:scale-105 hover:shadow-xl m-4 dark:bg-gray-700  ${
              isDarkMode ? "dark" : ""
            }`}
          >
            <Link to={`/showPost/${post._id}`}>
              <img
                src={post.imageUrl}
                alt="Product"
                className="h-80 w-full object-cover rounded-t-xl"
              />
            </Link>
            <div className="px-4 py-3">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {post.author}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize dark:text-zinc-200">
                {post.title}
              </p>
              <p className="text-md font-semibold text-black cursor-auto my-3 dark:text-zinc-200">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
