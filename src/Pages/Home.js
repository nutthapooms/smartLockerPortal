import React from 'react'
import SearchBar from '../components/searchBar'
import ItemCatalog from '../components/ItemCatalog'
import LoanModal from '../components/LoanModal'
import useModal from '../hooks/useModal'


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