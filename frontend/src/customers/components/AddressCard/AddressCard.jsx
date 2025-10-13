import React from 'react'
import './style.css'
const AddressCard = ({ address }) => {

  return (
    <div>
      <div className='space-y-3 address_card px-5 py-4'>
        <p className='font-semibold'>{address?.firstName + " " + address?.lastName}</p>
        <p>{address?.streetAddress}, {address?.city}, {address?.state}, INDIA, {address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone No : </p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard