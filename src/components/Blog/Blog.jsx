import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    post_title,
    cover_image,
    author_profile_picture,
    author_name,
    estimated_reading_time,
    posting_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full mb-8" src={cover_image} alt="" />

      <div className=" flex items-center justify-between">
        <div className="flex gap-6">
          <img
            className="size-16 object-cover object-top rounded-full"
            src={author_profile_picture}
            alt=""
          />

          <div>
            <h3 className="text-xl">{author_name}</h3>
            <p>{posting_date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span>{estimated_reading_time} min read</span>

          <button onClick={() => handleAddToBookMark(blog)}>
            <BsBookmark />
          </button>
        </div>
      </div>

      <p>{post_title}</p>

      <p className="gap-4 mb-5">
        {hashtags.map((hashtag, index) => (
          <span className="mr-4" key={index}>
            <a href="">{hashtag}</a>
          </span>
        ))}
      </p>

      <a
        className="text-blue-700 underline cursor-pointer"
        onClick={() => handleMarkAsRead(estimated_reading_time, post_title)}
      >
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
