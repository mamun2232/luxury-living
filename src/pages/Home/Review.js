import React, { useEffect } from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Review = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    fetch('Review.json')
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])
  return (
    <div className='max-w-7xl m-auto px-2 mt-40'>
      <div className='my-10 text-center'>
        <h3 className='text-2xl '>Testimonials</h3>
        <p className='text-xl font-bold'>Our happy Customer Say</p>
      </div>
      <div className=''>
        <Swiper

          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >


          {
            review.map((rev, i) => <SwiperSlide key={i}>

              <div className='py-10'>
              <div class="card w-96 h-80   bg-red-100 shadow-xl">
              <div class="card-body h-full">
                <div className=" text-center">
                  <div class="avatar  ">
                    <div class="w-16">
                      <img className='rounded-full' src={rev.img} />
                    </div>
                  </div>

                  <div>
                    <h1 className='text-xl'>{rev.name}</h1>
                    <h1>{rev.country}</h1>
                  </div>

                </div>
                <div className='h-full mt-1'>
                  <p>{rev.comment}</p>
                  <p>Retings: {rev.retings}</p>

                </div>
                </div>

              </div>
              </div>
            </SwiperSlide>)
          }

          {/* <SwiperSlide>

        <div class="card w-full lg:w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title 1</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  w-full lg:w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title 2</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div class=" w-full lg:w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title 3</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title
    4</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;