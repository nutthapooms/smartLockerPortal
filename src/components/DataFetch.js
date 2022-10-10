import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import ItemCard from './ItemCard'

const APIRequest = api => {
    const [ data, setData ] = useState()
    const [ isLoad, setIsLoaded ] = useState()
    const [ err, setErr ] = useState()

    useEffect(() => {
      axios.get(api)
      .them(res => {
        setIsLoaded()
        setData(res.data)
      })

      .catch((err) => {
        setErr(err)
      })
    }, [api])

  return { data, isLoad, err}
}


export default function DataFetch() {
  const { data, isLoad, err } = APIRequest(`https://6339ae2d66857f698fba10a2.mockapi.io/dbapi/itemDetails/`)

  // return error message if there's error occur

  if(err != null) {
    return (
      <div>ERROR</div>
    )
  }
  
  if(!isLoad) {
    return (
      <Loader />
    )
  }

  return (
    <div>{data.map(item => 
      <div>{item.id}</div>
      )}
    </div>
  )
};


