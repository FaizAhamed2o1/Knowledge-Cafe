import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  
  return (
    <div>
      <h2 className="text-2xl">Number of Blogs: {blogs.length}</h2>
    </div>
  );
};

export default Blogs;
