import React from 'react'
import Header from './components/Header.cjs'
import Home from './Pages/Home.cjs'
import MyItem from './Pages/MyItem.cjs'
import Howto from './Pages/Howto.cjs'
import ItemPage from './Pages/ItemPage.cjs'
import { Routes, Route } from "react-router-dom"
import './components/stylesheets/customcss/Header.css'
import './components/stylesheets/customcss/itemCard.css'
import './components/stylesheets/customcss/itemPage.css'
import './components/stylesheets/css/em-unity-1.7.1.css'
import './components/stylesheets/css/em-unity-1.7.1.min.css'



// import MyItem from './components/MyItem'
// import { BrowserRouter as Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
        <div className='#'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
        <div className='#'>
          <Routes>
            <Route path='/howto' element={<Howto />}></Route>
          </Routes>
        </div>
        <div className='#'>
          <Routes>
            <Route path='/myitem' element={<MyItem />}></Route>
          </Routes>
        </div>
        <Routes>
            <Route path='/item/:id' element={<ItemPage />}></Route>
        </Routes>
    </>
  );
}

export default App