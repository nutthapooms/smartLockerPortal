import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'
import LoanModal from '../components/LoanModal'
import useModal from '../hooks/useModal'
import '../components/stylesheets/customcss/itemPage.css'

function ItemPage() {
    const { isShowing, toggle } = useModal()
    const { id } = useParams()
    const api = `https://6339ae2d66857f698fba10a2.mockapi.io/dbapi/itemDetails/${id}`
    const [ item, setItem ] = useState({
        loading: false,
        data: null
    })
  
    useEffect(() => {
      setItem({
        loading: true,
        data: null,
      })
  
      axios.get(api)
        .then(res => {
          setItem({
            loading: false,
            data: res.data
          })
      })
    }, [api])
    
    if(item.loading) {
      return (
        <div className='#'>
          <Loader />
        </div>
      )
    }

    if(item.data) {
        return (
        <div className='em-l-container em-u-margin-top-quad'>
            <a className='em-u-margin-bottom-double' href='/'>Go back</a>
            <div className='em-l-grid em-l-grid--2up'>
                <div className='em-l-grid__item right-grid'>
                    <div className='img-alignment'>
                      <img src={item.data.itemImg} alt={item.data.itemName}></img>
                    </div>
                  </div>
                  {/* end of left grid */}
                  
                <div className='em-l-grid__item grid-container'>
                  <div className='#'>
                      <h2 className='#'>{item.data.itemName}</h2>
                  </div>
                  <div className='em-u-margin-top-double description-container'>
                      <h4>Description</h4>
                      <div className='#'>
                        {item.data.description}
                      </div>
                  </div>
                  {/* end of description section */}
                  <div className='some-container'>
                    <div className>
                      <h4 className='#'>Type</h4>
                      <span>{item.data.type}</span>
                      </div>
                    {/* end of item type section*/}
                    <div className='owner-alignment'>
                      <h4 className='#'>Owner</h4>
                        <span className='em-c-text-link'>{item.data.owner}</span>
                    </div>
                    {/* end of owner section */}
                  </div>
                  {/* end of type & owner section */}
                  <div className='bottom-section-container'></div>
                    <div className=''>
                        <h4 className='#'>Availability</h4>
                        <ul>
                            <li>XOMMON room: {item.data.amount.xommon}</li>
                            <li>ITSC: {item.data.amount.itsc}</li>
                        </ul>
                    </div>
                    {/* end of availability section */}
                    <LoanModal 
                      isShowing={isShowing}
                      hide={toggle}
                    />
                    {/* end of loan button */}
                </div>
                {/* end of right grid */}
            </div>
        </div>
        )
    }
  
  return (
    <div></div>
  )
}

export default ItemPage