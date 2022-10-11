import React from 'react'
import SearchBar from '../components/searchBar.js'
import ItemCatalog from '../components/ItemCatalog.js'
import LoanModal from '../components/LoanModal.js'
import useModal from '../hooks/useModal.js'


function Home() {
  const { isShowing, toggle } = useModal()
  return (
    <>
      
      <SearchBar />
      <button onClick={toggle}>Loan</button>
      <LoanModal
        isShowing={isShowing}
        hide={toggle}
      />
      <ItemCatalog />

    </>
  )
}

export default Home