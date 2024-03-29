import React, { useState } from "react";

const CreatePost = () => {
  const [post, setPost] = useState({
    projectName: "",
    description: "",
    category: {},
    materials: "",
    process: "",
    hashtags: "",
    image: "",
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const savedCategoryChoice = localStorage.getItem("userCategoryChoice");
    const categoryChoice = JSON.parse(savedCategoryChoice);
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
        category: categoryChoice.id,
        tags,
        imageUrl: image,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "./explore.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-white p-8 rounded shadow-md">
      <h1 className="text-5xl font-semibold mb-4 text-center text-orange-400">
        Share Your New DIY!
      </h1>
      <form
        onSubmit={handleSubmit}
        method="post"
        id="postForm"
        enctype="multipart/form-data"
      >
        <div className="space-y-4">
          <div>
            <label
              for="projectName"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              maxLength="300"
              required
              className="w-full border border-orange-400 p-2 rounded general-input"
              value={post.projectName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              for="description"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              required
              className="w-full border border-orange-400 p-2 rounded general-input"
              value={post.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label
              for="materials"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Materials:
            </label>
            <textarea
              id="materials"
              name="materials"
              rows="3"
              required
              className="w-full border border-orange-400 p-2 rounded general-input"
              value={post.materials}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label
              for="process"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Describe your process:
            </label>
            <textarea
              id="process"
              name="process"
              rows="3"
              required
              className="w-full border border-orange-400 p-2 rounded general-input"
              value={post.process}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label
              for="hashtags"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Hashtags (comma-separated):
            </label>
            <input
              type="text"
              id="hashtags"
              name="hashtags"
              className="w-full border border-orange-400 p-2 rounded general-input"
              required
              value={post.hashtags}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              for="image"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Upload Image:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full border border-orange-400 p-2 rounded general-input"
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
  );
};

export default CreatePost;
