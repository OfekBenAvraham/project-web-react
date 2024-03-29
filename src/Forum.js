import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Forum = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://project-web-psi.vercel.app/post/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: categoryName }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [categoryName]);

  return (
    <div className="container mx-auto mt-12 p-6">
      <div
        id="Projects"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {posts.map((post) => (
          <div
            key={post._id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-4"
          >
            <Link to={`/showpost/${post._id}`}>
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
              <p className="text-lg font-bold text-black truncate block capitalize">
                {post.title}
              </p>
              <p className="text-md font-semibold text-black cursor-auto my-3">
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
