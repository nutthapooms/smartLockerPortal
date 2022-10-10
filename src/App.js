import React from 'react'
import Header from './components/Header.js'
import Home from './Pages/Home.js'
import MyItem from './Pages/MyItem.js'
import Howto from './Pages/Howto.js'
import ItemPage from './Pages/ItemPage.js'
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