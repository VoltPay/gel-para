import React from 'react';
import './Cards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

function Cards() {
    const cardImage = [
        { id: "1", img: "../src/assets/img/bank-card-1.png" },
        { id: "2", img: "../src/assets/img/bank-card-2.png" },
        { id: "3", img: "../src/assets/img/bank-card-3.png" },
        { id: "4", img: "../src/assets/img/bank-card-1.png" },
        { id: "5", img: "../src/assets/img/bank-card-2.png" },
        { id: "6", img: "../src/assets/img/bank-card-3.png" },
    ];

    return (
        <div className='p-3 pt-4 z-1'>
          <div className='d-flex align-items-center justify-content-between'>
              <p className='m-0 table-title'>Hızlı İşlemler</p>
              <Link to={""} className='table-all-btn'>Tümünü Gör</Link>
            </div>
            <div className="cards-wrapper-slider">
                <Swiper
                    spaceBetween={250}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='mt-2'
                >
                    {cardImage.map((card) => (
                        <SwiperSlide key={card.id}>
                            <img src={card.img} alt={`card-${card.id}`} width={300} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
}

export default Cards;
