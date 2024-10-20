import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { post_title } = bookmark;
  return <p className="p-4 text-lg bg-white rounded-lg">{post_title}</p>;
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
