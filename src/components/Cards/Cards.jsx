import React from 'react';
import './Cards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import bankCard1 from "../../assets/img/bank-card-1.png";
import bankCard2 from "../../assets/img/bank-card-2.png";
import bankCard3 from "../../assets/img/bank-card-3.png";
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
                    style={{zIndex:"2"}}
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
