import axios from 'axios'
import React, { useState, useEffect } from 'react'


function useData() 
const api = ``
const [ data, setData] = useState(api)

useEffect(() => {
    axios.get(api)
    .then(res => {
        setData(res.data)
    })
}, [api])

{
  return (
    <div>useData</div>
  )
}

export default useData