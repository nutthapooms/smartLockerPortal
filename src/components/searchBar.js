import React from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai/index.esm.js'
import './stylesheets/customcss/searchBar.css'

function SearchBar() {
  return (
    <div className='searchbar em-c-band--gray'>
        <div className='searchbar-container em-l-container'>
            <div className='searchbar-alignment'>
                <div className='searchbox-container'>
                    <form method='post' className='em-c-search-form'>
                        <div className='searchbox-body em-c-search__body'>
                            <input className='searchbox em-c-search__input' placeholder='What are you looking for?'></input>
                            <div className='em-c-btn'>
                                <button type='submit' className='#'>
                                    <div className='#'>
                                      <IconContext.Provider value={{ color: "black"}}>
                                        <div className='#'>
                                          <AiOutlineSearch />
                                        </div>
                                      </IconContext.Provider>
                                    </div>
                                </button>
                            </div>
                            {/* end of search btn */}
                        </div>
                        {/* end of searchbox body */}
                    </form>
                </div>
                {/* end of searchbox */}
                <div className='filter-container'>
                    <div className='#'>
                        <form className='em-c-field em-c-field--inline' method='post'>
                            <div className='em-c-field-body filter-wrapper'>
                                <select className='em-c-select  em-js-select-panel-trigger'>
                                    <option value>All Type</option>
                                    <option value>IT Assets</option>
                                    <option value>Board Game</option>
                                </select>
                            </div>
                            {/* end of filter wrapper */}
                        </form>
                    </div>
                    {/* end of type filter */}
                </div>
                    <div className='#'>
                            <form className='em-c-field em-c-field--inline' method='post'>
                                <div className='em-c-field-body filter-wrapper'>
                                    <select className='em-c-select  em-js-select-panel-trigger'>
                                        <option value>All Location</option>
                                        <option value>XOMMON Room, 3rd floor</option>
                                        <option value>ITSC, 12th floor</option>
                                    </select>
                                </div>
                              {/* end of filter wrapper */}
                            </form>
                    </div>
                {/* end of filter */}
            </div>
        </div>
    </div>
  )
}

export default SearchBar