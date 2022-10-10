// import React, { useState } from 'react'

// const Readmore = ({ child }) => {
//     const text = child
//     const [ readMore, setReadmore ] = useState(true)
//     const toggleReadMore = () => {
//         setReadMore(!readMore)
//     }

//   return (
//     <div className='#'>
//         <p>
//             { readMore ? text.slice(0, 150) : text }
//             <span className='#' onClick={toggleReadmore}></span>
//                 { readMore ? '...read more' : 'show less'}
//         </p>
//     </div>
//   )
// }

// function ReadMoreContent(props){
//     return (
//     <div className='#'>
//         <Readmore>
//             {props.item.description}
//         </Readmore>
//     </div>
//     )
// }
// export default ReadMoreContent