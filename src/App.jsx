import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className='container mx-auto py-8 grid gap-4 grid-cols-1 md:grid-cols-3'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
        ></Bookmarks>
      </main>
    </>
  )
}

export default App
