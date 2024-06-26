import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CreatePost = () => {
  const { categoryId } = useParams();

  const [post, setPost] = useState({
    projectName: "",
    description: "",
    materials: "",
    categoryId,
    process: "",
    hashtags: "",
    image: "",
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { projectName, description, materials, process, hashtags, image } =
      post;
    const tags = hashtags.split(",");
    if (tags.length > 3) {
      alert("Please insert not more than 3 tags");
      return;
    }
    fetch("https://project-web-psi.vercel.app/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: projectName,
        description,
        materials,
        process,
        tags,
        category: categoryId,
        imageUrl: image,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = `../forum/${categoryId}`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen">
      <div className="container mt-20 mx-auto mt-8 p-4 bg-white p-8 rounded shadow-md dark:bg-gray-600">
        <h1 className="text-5xl font-semibold mb-4 text-center text-orange-400">
          Share Your New DIY!
        </h1>
        <form
          onSubmit={handleSubmit}
          method="post"
          id="postForm"
          encType="multipart/form-data"
        >
          <div className="space-y-4 ">
            <div>
              <label
                htmlFor="projectName"
                className="block text-gray-700 text-sm font-medium mb-2 dark:text-zinc-100"
              >
                Project Name:
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                maxLength="300"
                required
                className="w-full border border-orange-400 p-2 rounded general-input dark:text-zinc-100 dark:bg-slate-500"
                value={post.projectName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-medium mb-2 dark:text-zinc-100"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                required
                className="w-full border border-orange-400 p-2 rounded general-input dark:text-zinc-100 dark:bg-slate-500"
                value={post.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="materials"
                className="block text-gray-700 text-sm font-medium mb-2 dark:text-zinc-100"
              >
                Materials:
              </label>
              <textarea
                id="materials"
                name="materials"
                rows="3"
                required
                className="w-full border border-orange-400 p-2 rounded general-input dark:text-zinc-100 dark:bg-slate-500"
                value={post.materials}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="process"
                className="block text-gray-700 text-sm font-medium mb- dark:text-zinc-100"
              >
                Describe your process:
              </label>
              <textarea
                id="process"
                name="process"
                rows="3"
                required
                className="w-full border border-orange-400 p-2 rounded general-input dark:text-zinc-100 dark:bg-slate-500"
                value={post.process}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="hashtags"
                className="block text-gray-700 text-sm font-medium mb-2 dark:text-zinc-100"
              >
                Hashtags (comma-separated):
              </label>
              <input
                type="text"
                id="hashtags"
                name="hashtags"
                className="w-full border border-orange-400 p-2 rounded general-input dark:text-zinc-100 dark:bg-slate-500"
                required
                value={post.hashtags}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-700 text-sm font-medium mb-2 dark:text-zinc-100"
              >
                Upload Image:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="w-full border border-orange-400 p-2 rounded general-input dark:text-zinc-100 dark:bg-slate-500"
                value={post.image}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              <input
                type="submit"
                value="Post"
                className="bg-gradient-to-br from-orange-600 to-orange-400 min-w-24 text-white px-4 text-lg py-2 rounded-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
