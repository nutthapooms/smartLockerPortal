import React from 'react'
import Header from './components/Header'
import Home from './Pages/Home'
import MyItem from './Pages/MyItem'
import Howto from './Pages/Howto'
import ItemPage from './Pages/ItemPage'
import LoanPage from './Pages/LoanPage'
import { Routes, Route } from "react-router-dom"

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
        <Routes>
            <Route path='/item/:id/loan' element={<LoanPage />}></Route>
        </Routes>


    </>
  );
}

export default App