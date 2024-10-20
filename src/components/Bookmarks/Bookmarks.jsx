import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks, spentTimeOnReading }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-purple-50 py-5 mb-6 text-2xl font-bold text-center text-blue-900 border border-blue-900 rounded-lg">
        <p>Spent time on read: {spentTimeOnReading} min</p>
      </div>

      <div className="bg-[#1111110D] p-8 rounded-lg">
        <h2 className="mb-4">Bookmarks: {bookMarks.length}</h2>

        <div className="bookmarks-container space-y-4">
          {bookMarks.map((bookmark, index) => (
            <Bookmark key={index} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  spentTimeOnReading: PropTypes.number,
};

export default Bookmarks;
