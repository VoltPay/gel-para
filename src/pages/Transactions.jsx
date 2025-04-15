import React from 'react'
import Filter from '../components/Filter/Filter'
import Tables from '../components/Tables/Tables'

function Transactions() {
  return (
    <div className='pe-lg-5'>
      <div className="px-lg-3 ">
        <Filter />
      </div>
      <div className="px-lg-3">
        <div className='card-bg mt-4 '>
          <Tables />
        </div>
      </div>

    </div>
  )
}

export default Transactions