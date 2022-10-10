import React from 'react'
import SearchBar from '../components/searchBar.cjs'
import ItemCatalog from '../components/ItemCatalog.cjs'
import LoanModal from '../components/LoanModal.cjs'
import useModal from '../hooks/useModal.cjs'


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