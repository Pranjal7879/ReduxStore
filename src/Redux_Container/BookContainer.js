import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './BookAction'
function BookContainer() {
   const noOfBooks =  useSelector(state => state.NumberofBooks)
  const dispatch =  useDispatch()
  return (
    <>
    <div>BookContainer</div>
    <h2> No. of Books {noOfBooks}</h2>
    <button onClick={() =>{dispatch(purchase_book())}}>Buy_Book</button>
    </>
  )
}

export default BookContainer 