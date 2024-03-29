import React, { useEffect, useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedCategoryChoice = localStorage.getItem('userCategoryChoice');
    const categoryChoice = JSON.parse(savedCategoryChoice);

    fetch("https://project-web-psi.vercel.app/post/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: categoryChoice.name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="container mx-auto mt-12 p-6">
      <div id="Projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-4">
            <a href={`./showpost.html?id=${post._id}`}>
              <img src={post.imageUrl} alt="Product" className="h-80 w-full object-cover rounded-t-xl" />
            </a>
            <div className="px-4 py-3">
              <span className="text-gray-400 mr-3 uppercase text-xs">{post.author}</span>
              <p className="text-lg font-bold text-black truncate block capitalize">{post.title}</p>
              <p className="text-md font-semibold text-black cursor-auto my-3">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
