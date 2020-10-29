import { useState } from 'react'
const Quantity = () => {
  const [itemQuantity, setItemQuantity] = useState('')
  return (
    <div>
      <input type="number"></input>
    </div>
  )
}

export default Quantity
