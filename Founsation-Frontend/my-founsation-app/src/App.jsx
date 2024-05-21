 
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/layout/header/Header'
import Home from './components/pages/home/Home'
import Post from './components/pages/post/Post'
import Wishlist from './components/pages/wishlist/Wislist'

function App() {
 

  return (
    <>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
     </Routes>
    </>
  )
}

export default App
