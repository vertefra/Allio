import { useState } from 'react'
const Quantity = ({ quantity }) => {
  return (
    <div>
      <input type="number" value={quantity} readOnly></input>
    </div>
  )
}

export default Quantity
