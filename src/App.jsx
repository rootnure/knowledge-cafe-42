import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const handleBookmark = (id) => {
    console.log('to be bookmarked', id);
  }

  return (
    <>
      <Header></Header>
      <main className='container mx-auto py-8 grid gap-4 grid-cols-1 md:grid-cols-3'>
        <Blogs
          handleBookmark={handleBookmark}
        ></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
