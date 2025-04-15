import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import "./AccountingAccuracy.css"
import { Form } from 'react-bootstrap';

function AccountingAccuracy() {
    return (
        <div className=''>
            <div className='p-4'>
                <div className='d-flex align-items-center justify-content-between gap-3'>
                    <div className='d-flex align-items-center gap-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <path d="M48.4647 25.5C49.8649 25.5 51.0131 26.638 50.8741 28.0312C50.3223 33.5646 47.9723 38.7923 44.1479 42.8927C39.7445 47.6139 33.7142 50.4891 27.2739 50.9382C20.8336 51.3873 14.4627 49.3769 9.44664 45.3126C4.43059 41.2483 1.14285 35.4327 0.246807 29.0392C-0.649238 22.6458 0.913119 16.1504 4.61863 10.8638C8.32414 5.57717 13.8969 1.89283 20.2126 0.554194C26.5282 -0.784444 33.1165 0.322276 38.6481 3.65104C43.4524 6.54213 47.149 10.9224 49.2007 16.0909C49.7173 17.3923 48.9262 18.8021 47.58 19.187C46.2337 19.5719 44.8447 18.7839 44.2962 17.4956C42.6193 13.5578 39.7374 10.2244 36.0337 7.99559C31.602 5.32873 26.3238 4.44208 21.264 5.51454C16.2042 6.58699 11.7395 9.53872 8.77078 13.7741C5.80209 18.0095 4.5504 23.2133 5.26827 28.3355C5.98614 33.4576 8.62013 38.1168 12.6388 41.373C16.6574 44.6291 21.7615 46.2398 26.9212 45.88C32.0809 45.5202 36.912 43.2167 40.4398 39.4343C43.3881 36.2732 45.2427 32.2759 45.7724 28.0289C45.9457 26.6395 47.0645 25.5 48.4647 25.5Z" fill="#404040" />
                                <path d="M35.7985 46.0261C36.4264 47.2776 37.9583 47.7935 39.1413 47.0445C42.3862 44.9899 45.1349 42.2225 47.1706 38.9401C49.6531 34.9373 50.9785 30.3251 50.9997 25.615C51.021 20.9049 49.7373 16.281 47.2909 12.2559C44.8446 8.2309 41.3313 4.96207 37.1405 2.81194C32.9498 0.661802 28.2454 -0.285618 23.5491 0.0747389C18.8527 0.435096 14.348 2.08915 10.5343 4.85348C6.72069 7.6178 3.7472 11.3844 1.94358 15.7355C0.464573 19.3036 -0.180357 23.1504 0.0432339 26.9845C0.124749 28.3823 1.43732 29.3258 2.82014 29.1059C4.20296 28.8861 5.12904 27.5851 5.08204 26.1857C4.98451 23.2814 5.50748 20.3795 6.62765 17.6771C8.07263 14.1912 10.4549 11.1736 13.5102 8.95893C16.5655 6.74427 20.1745 5.41912 23.937 5.13042C27.6995 4.84172 31.4684 5.60075 34.8259 7.32334C38.1833 9.04593 40.998 11.6648 42.9579 14.8894C44.9178 18.1141 45.9463 21.8186 45.9293 25.5921C45.9122 29.3656 44.8504 33.0607 42.8615 36.2676C41.3197 38.7536 39.2674 40.8709 36.8514 42.4856C35.6872 43.2636 35.1706 44.7746 35.7985 46.0261Z" fill="url(#paint0_linear_85_708)" />
                                <defs>
                                    <linearGradient id="paint0_linear_85_708" x1="25.5" y1="0" x2="25.5" y2="51" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#9CEE69" />
                                        <stop offset="1" stopColor="#F3A9CE" stopOpacity="0.901961" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className='m-0 accounting-title'>Hesap Doğruluğu</p>
                    </div>
                    <div>
                        <OverlayTrigger
                            overlay={<Tooltip >Hesabınızı daha güvenli hale getirmek için bütün bilgileri giriniz.</Tooltip>}>
                            <Button variant="transparent" className='border-0 p-0 m-0'><IoMdInformationCircleOutline className='text-white' size={29} /></Button>
                        </OverlayTrigger>
                    </div>

                </div>
                <div className='mt-4'>
                    <div className=''>
                        <Form className='d-flex align-items-start gap-3 flex-column'>
                            <Form.Check
                                inline
                                type="checkbox"
                                label="Telefon Doğrulaması"
                                name="group1"
                                id="check-1"
                                className='custom-checkbox d-flex align-items-center gap-2'
                            />
                            <Form.Check
                                inline
                                type="checkbox"
                                label="E-Posta Doğrulaması"
                                name="group1"
                                id="check-2"
                                className='custom-checkbox d-flex align-items-center gap-2'
                            />
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    label="Kimlik Doğrulama(KYC)"
                                    name="group1"
                                    id="check-3"
                                    className='custom-checkbox d-flex align-items-center gap-2'
                                />
                                <OverlayTrigger
                                    overlay={<Tooltip >TCKN girmeniz gerekmekte.</Tooltip>}>
                                    <Button variant="transparent" className='border-0 p-0 m-0'><IoMdInformationCircleOutline className='text-white' size={29} /></Button>
                                </OverlayTrigger>
                            </div>
                            <Form.Check
                                inline
                                type="checkbox"
                                label="Banka Hesabı Ekle"
                                name="group1"
                                id="check-4"
                                className='custom-checkbox d-flex align-items-center gap-2'
                            />
                        </Form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountingAccuracy