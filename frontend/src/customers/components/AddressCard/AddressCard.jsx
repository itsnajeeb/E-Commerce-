import React from 'react'
import './style.css'
const AddressCard = () => {
  return (
    <div>
      <div className='space-y-3 address_card px-5 py-4'>
        <p className='font-semibold'>Md Najeeb</p>
        <p>Darbhanga, Bihar, INDIA, 847423</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone No : </p>
          <p>9102303251</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard