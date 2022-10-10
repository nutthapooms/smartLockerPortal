import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemCard from './ItemCard'
import Loader from './Loader'
import '../components/stylesheets/customcss/itemCard.css'


function ItemCatalog() {
  // const api = `https://6339ae2d66857f698fba10a2.mockapi.io/dbapi/itemDetails/`
  const api = 'https://smartlocker20220922110147.azurewebsites.net/api/admin/units/container?containerId=1'
  const [items, setItems] = useState({
    loading: false,
    data: null,
    err: false
  })

  let itemCardContent = null

  useEffect(() => {
    setItems({
      loading: true,
      data: null,
      err: false
    })

    axios.get(api)
      .then(res => {
        setItems({
          loading: false,
          data: res.data,
          err: false
        })
      })

      .catch(() => {
        setItems({
          loading: false,
          data: null,
          err: true
        })
      })

  }, [api])

if (items.err) {
  return (
    <div>ERROR: item data not found</div>
  )
}

if (items.loading) {
  return (
    <div className='#'>
      <Loader />
    </div>
  )
}

if (items.data) {
  return (
    <div >
      {items.data.map((item, key )=>
        <div className='item-card-container em-l-container' key={item.id}>
          {/* {item.id} */}

          <ItemCard
            item={item}
          />
        </div>
      )}
    </div>
  )
}


return (
  <div className='item-card-container em-l-container'>
    {/* {itemCardContent} */}
  </div>
)
}

export default ItemCatalog