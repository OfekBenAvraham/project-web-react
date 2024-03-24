import React, { useState, useEffect } from "react";

const ShowPost = () => {
  const [post, setPost] = useState({
    title: "Beach Style Decor",
    imageUrl:
      "https://images.unsplash.com/photo-1616593969747-4797dc75033e?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Transform your home with this beach style decor project. It's perfect for bringing a bit of summer into any space!",
    materials: "Sea shells, Driftwood, String lights",
    steps:
      "Arrange sea shells and driftwood on a wooden board., Wrap the string lights around the arrangement., Hang the decor piece on a wall to add a beach vibe to your room.",
    tags: ["#BeachDecor", "#DIYProject"],
    comments: [
      {
        author: "Alex",
        text: "Love this beach style decor idea! Can't wait to try it out.",
      },
      {
        author: "Jordan",
        text: "Just finished making this for my living room, and it looks fantastic. Thanks for the inspiration!",
      },
    ],
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Fetch post details from API
    // setPost(responseData);
  }, []);

  return (
    <div className="container mx-auto mt-12 p-6">
      <div className="text-lg text-center">
        <a href="./explore.html" className="hover:underline">
          explore
        </a>
        <span>&lt;</span>
        <a href="./forum.html" className="hover:underline">
          decor
        </a>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="lg:w-1/2">
          <img
            src={post.imageUrl}
            alt="DIY Project Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-8 space-y-6">
          <h1 className="text-4xl font-bold text-orange-600">{post.title}</h1>
          <p className="text-lg">{post.description}</p>
          <h2 className="text-2xl font-semibold text-orange-500">
            Materials Needed
          </h2>
          <ul className="text-lg">
            {post.materials.split(", ").map((material) => (
              <li key={material}>{material}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-orange-500">Steps</h2>
          <ol className="text-lg">
            {post.steps.split(", ").map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="flex flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-orange-300 text-orange-800 px-4 py-2 rounded-full text-sm mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold">Comments</h2>
            <textarea
              className="w-full rounded-lg border-gray-300 p-4 text-lg"
              placeholder="Add a comment..."
              rows="3"
            ></textarea>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-lg">
              Post Comment
            </button>
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.author} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">{comment.author}</p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-lg"
        >
          Like Post
        </button>
        <p className="mt-2">Likes: {counter}</p>
      </div>
    </div>
  );
};

export default ShowPost;
