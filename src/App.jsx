import { useState } from "react";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/Blog/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    let newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time) => {
    let newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  
  return (
    <div>
      <Header />
      <div className=" flex max-w-7xl mx-auto mt-4">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadingTime={handleReadingTime}
        />
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;