import React, { useState } from 'react'
import Input from '../components/Input/Input'
import Select from '../components/Select/Select'
const options = [
  {value: "1", label:"Bir"},
  {value: "2", label:"İki"},
  {value: "3", label:"Üç"},
]
function DepositMoney() {
  const [selectedValue, setSelectedValue] = React.useState('');
  return (
    <div className=' h-100 pe-4'>
      <div className="px-lg-3" style={{ height: '100%' }}>
        <div className='card-bg  h-100'>
          <form action="" className='px-5 '>
            <div className="row pt-4">
              <div className="col-lg-12 mb-lg-5 mb-3">
                <Select options={options} defaultLabel='Banka Seçiniz' value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} name="numbers"/>
              </div>
              <div className="col-lg-4 mb-lg-5 mb-3">
                <Input label="Hesap Sahibi" />
              </div>
              <div className="col-lg-4 mb-lg-5 mb-3">
                <Input label="IBAN" />
              </div>
              <div className="col-lg-4 mb-lg-5 mb-3">
                <Input label="Müşteri Numarası" />
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default DepositMoney