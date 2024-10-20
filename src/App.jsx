import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Heder/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [spentTimeOnReading, setSpentTimeOnReading] = useState(0);

  const handleAddToBookMark = (blog) => {
    const isAlreadyBookmarked = bookMarks.some(
      (bookmark) => bookmark.id === blog.id
    );
    if (!isAlreadyBookmarked) {
      const newBookMarks = [...bookMarks, blog];
      setBookMarks(newBookMarks);
    }
  };

  const handleMarkAsRead = (readingTime, postTitle) => {
    setSpentTimeOnReading(spentTimeOnReading + readingTime);

    // Note: remove the post from bookmarks if mark as read button is clicked
    const removedBookmarks = bookMarks.filter(
      (bookmark) => bookmark.post_title !== postTitle
    );
    setBookMarks(removedBookmarks);
  };

  return (
    <>
      <Header></Header>

      <div className="md:flex max-w-6xl gap-6 mx-auto">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>

        <Bookmarks
          bookMarks={bookMarks}
          spentTimeOnReading={spentTimeOnReading}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
