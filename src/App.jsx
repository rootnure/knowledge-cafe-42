import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <h1 className='text-5xl bg-yellow-400'>Knowledge Cafe</h1>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
