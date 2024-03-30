import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({ comments: [] });
  const [commentText, setCommentText] = useState("");
  const token = localStorage.getItem("userLoginToken");

  useEffect(() => {
    Promise.all([
      fetch(`https://project-web-psi.vercel.app/post/${postId}`).then(
        (response) => response.json()
      ),
      fetch(`https://project-web-psi.vercel.app/comment/${postId}`).then(
        (response) => response.json()
      ),
    ])
      .then(([postData, commentData]) => {
        setPost(postData);
        setPost((prevPost) => ({
          ...prevPost,
          comments: commentData,
        }));
      })
      .catch((error) =>
        console.error("Error fetching post and comments:", error)
      );
  }, [postId, post.comments]);

  const postComment = () => {
    console.log("Posting Comment...");
    if (!token) {
      alert("You can't post a comment if you're not logged in!");
      return;
    }

    fetch(`https://project-web-psi.vercel.app/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: postId,
        comment: commentText,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post comment");
        }
        return response.json();
      })
      .then((newComment) => {
        // Update comments state directly with the new comment
        setPost((prevPost) => ({
          ...prevPost,
          comments: [...(prevPost.comments || []), newComment],
        }));
        setCommentText("");
      })
      .catch((error) => console.error("Error posting comment:", error));
  };

  return (
    <div className="container mx-auto mt-12 p-6">
      <div className="text-lg text-center">
        <a href="/explore" className="hover:underline dark:text-zinc-100">
          explore
        </a>
        <span className="dark:text-zinc-100">&lt;</span>
        <a href="/forum" className="hover:underline dark:text-zinc-100">
          decor
        </a>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap bg-white rounded-xl shadow-xl overflow-hidden dark:bg-gray-700">
        <div className="lg:w-1/2">
          <img
            src={post.imageUrl}
            alt="postImage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-8 space-y-6">
          <h1 className="text-4xl font-bold text-orange-600 ">{post.title}</h1>
          <p className="text-lg dark:text-zinc-100">{post.description}</p>
          {post.materials && (
            <>
              <h2 className="text-2xl font-semibold text-orange-500">
                Materials Needed
              </h2>
              <ul className="text-lg dark:text-zinc-100">
                {post.materials.split("\n").map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </>
          )}
          {post.process && (
            <>
              <h2 className="text-2xl font-semibold text-orange-500">Steps</h2>
              <ol className="text-lg dark:text-zinc-100">
                {post.process.split("\n").map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </>
          )}
          <div className="flex flex-wrap">
            {post.tags &&
              post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-300 text-orange-800 px-4 py-2 rounded-full text-sm mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold dark:text-zinc-100">
              Comments
            </h2>
            <div className="space-y-4">
              {post.comments &&
                post.comments.map((comment, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg dark:bg-slate-400"
                  >
                    <p className="items-center mr-3 text-md text-gray-900 dark:text-white font-semibold">
                      {comment &&
                        comment.user.firstName + " " + comment.user.lastName}
                    </p>
                    <p>{comment && comment.comment}</p>
                  </div>
                ))}
            </div>
            <textarea
              className="w-full rounded-lg border-gray-300 p-4 text-lg dark:bg-slate-500"
              placeholder="Add a comment..."
              rows="3"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)} // Event handler to update commentText state
            ></textarea>
            <button
              onClick={postComment}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-lg"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
