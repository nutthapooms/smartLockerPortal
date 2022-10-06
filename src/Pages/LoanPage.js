import React, { useState, useEffect, setDate} from 'react'

function LoanPage() {
  const currentDate = new Date()

  // let returnDate = new Date(currentDate.getDate())
  //   returnDate.setDate(returnDate.getDate() + 2)
  //   setDate(returnDate)

  return (
    <div>LoanPage
      <div>
        Loan date: { currentDate.toDateString }
      </div>
    </div>
  )
}

export default LoanPage