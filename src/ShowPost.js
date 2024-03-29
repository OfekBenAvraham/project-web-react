import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(`https://project-web-psi.vercel.app/post/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => console.error("Error fetching post details:", error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-12 p-6">
      <div className="text-lg text-center">
        <a href="/explore" className="hover:underline">
          explore
        </a>
        <span>&lt;</span>
        <a href="/forum" className="hover:underline">
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
            {post.materials.split("\n").map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-orange-500">Steps</h2>
          <ol className="text-lg">
            {post.process.split("\n").map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="flex flex-wrap">
            {post.tags.map((tag, index) => (
              <span
                key={index}
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
              {post.comments &&
                post.comments.map((comment, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">{comment.author}</p>
                    <p>{comment.text}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
