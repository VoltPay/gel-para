import React, { useState } from 'react'
import Input from '../components/Input/Input'
import Textarea from '../components/Textarea/Textarea'
import "./PagesCss/PaymentMethod.css"
function IbanMoney() {
  const [textValue, setTextValue] = React.useState('');
  return (
    <div className=' h-100 pe-4'>
      <div className="px-lg-3" style={{ height: '100%' }}>
        <div className='card-bg  h-100'>
          <div className='p-lg-4 p-4'>
            <div className='d-flex align-items-center justify-content-between'>
              <p className='m-0 table-title'>Kartla Para Yatırın</p>
              {/* <Link to={"/last-operations"} className='table-all-btn'>Tümünü Gör</Link> */}
            </div>
            <div className="linear-line mt-3"></div>
          </div>
          <div>
            <div className="row px-4">
              <div className="col-lg-6 ">
                <div className="row">
                  <p className='m-0 mb-4 table-title'>Ödeme Bilgileri</p>
                  <div className="col-lg-6 mb-3">
                    <Input label="Tutar" type='number' />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <Input label="Para Birimi" type='text' />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <Input label="İsim Soyisim" type='text' />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <Input label="Kimlik Numarası" type='number' />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <Input label="E-Posta" type='mail' />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <Input label="Telefon Numarası" type='number' />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <Textarea
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                      placeholder="Adres"
                      name="adressText"
                      rows={5}
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <Textarea
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                      placeholder='Açıklama'
                      name="descriptionText"
                      rows={5}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <p className='m-0 mb-4 table-title'>Kart Bilgileri</p>
                  <div className="col-lg-12 mb-3">
                    <Input label="Kart Üzerindeki İsim" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <Input label="Kart Numarası" />
                  </div>
                  <div className="col-lg-4 mb-3">
                    <Input label="Son Kullanma Ay" />
                  </div>
                  <div className="col-lg-4 mb-3">
                    <Input label="Son Kullanma Yıl" />
                  </div>
                  <div className="col-lg-4 mb-3">
                    <Input label="CVV" />
                  </div>
                  <div className="col-lg-12mb-3">
                    <div className="d-flex justify-content-end">
                      <div class="custom-checkbox d-flex align-items-center gap-2 form-check form-check-inline">
                        <input id="check-1" class="form-check-input" type="checkbox" name="group1" />
                        <label title="" for="check-1" class="form-check-label">3D Ödeme</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end px-4 pb-4">
                <button className="btn linear-btn fw-600 text-black">
                  Onayla ve Bitir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default IbanMoney