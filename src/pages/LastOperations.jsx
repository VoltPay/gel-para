import React from 'react'
import Filter from '../components/Filter/Filter'
import Tables from '../components/Tables/Tables'

function LastOperations() {
  return (
    <div className='pe-lg-5 h-100'>
      <div className="px-lg-3 " style={{height : '15%'}}>
        <Filter />
      </div>
      <div className="px-lg-3"  style={{height : '85%'}}>
        <div className='card-bg  h-100'>
          <Tables />
        </div>
      </div>

    </div>
  )
}

export default LastOperations