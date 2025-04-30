import React from 'react';
import './Cards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import bankCard1 from "../../assets/img/bank-card-1.png";
import bankCard2 from "../../assets/img/bank-card-2.png";
import bankCard3 from "../../assets/img/bank-card-3.png";
import { RiVisaLine } from 'react-icons/ri';
function Cards() {
    const cardImage = [
        { id: "1", img: bankCard1 },
        { id: "2", img: bankCard2 },
        { id: "3", img: bankCard3 },
        { id: "4", img: bankCard1 },
    ];

    return (
        <div className='p-3 pt-4 '>
            <div className='d-flex align-items-center justify-content-between' >
                <p className='m-0 table-title'>Hızlı İşlemler</p>
                <Link to={"/quick-transactions"} className='table-all-btn'>Tümünü Gör</Link>
            </div>
            <div className="cards-wrapper-slider">
                <Swiper
                    spaceBetween={250}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='mt-2 '
                    style={{ zIndex: "2" }}
                >
                    {cardImage.map((card) => (
                        <SwiperSlide key={card.id}>
                            {/* <img src={card.img} alt={`card-${card.id}`} width={300} /> */}
                            <div className='credit-card-customize'>
                                <div className="d-flex flex-column justify-content-between h-100 py-2">

                                    <div className='d-flex justify-content-between align-items-center py-2 px-4'>
                                        <p className='m-0 p-0 credit-title'>Paynew</p>
                                        <RiVisaLine size={50} />
                                    </div>

                                    <div className='d-flex flex-column justify-content-start align-items-start py-2 px-4 gap-4'>
                                        <p className='m-0 credit-iban'>2139 12XX XXXX  0823</p>
                                        <div className='d-flex align-itmes-center gap-4'>
                                            <div className="d-flex flex-column align-items-start">
                                                <p className='m-0 last-date'>Tarih</p>
                                                <p className='m-0 last-date-text'>05/24</p>
                                            </div>
                                            <div className="d-flex flex-column align-items-start">
                                                <p className='m-0 cvv-text'>CVV</p>
                                                <p className='m-0 cvv-texti'>***</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
}

export default Cards;
