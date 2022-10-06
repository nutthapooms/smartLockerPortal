import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/customcss/itemCard.css'

function ItemCard(props) {
  return (
    <div className='#'>
        <div className='item-card'>
            <Link to={`/item/${props.item.id}`}>
                <div className='#'>
                    <img 
                        src={props.item.itemImg} 
                        alt={props.item.itemName}>
                    </img>
                </div>
            </Link>
            {/* end of item card header */}
                <div className='item-card-footer'>
                    <h3>{props.item.itemName}</h3>
                    <div className='#'>
                        Availability:{[props.item.amount.xommon] + [props.item.amount.itsc]} 
                    </div> 
                    <Link to={`/item/${props.item.id}`}>
                        <div className='em-c-text-link'>
                        See more detail
                        </div>
                    </Link>
                    <div className='loan-btn'>
                        <Link to={`/item/${props.item.id}/loan`}>
                            <button className='em-c-btn em-c-btn--primary'>Loan</button> 
                        </Link>
                    </div>

                </div>
                {/* end of item card foooter */}
        </div>
        {/* end of item card alignment */}
    </div>
  )
}

export default ItemCard