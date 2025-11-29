// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Space({facility}) {
    // console.log('facility', facility)
    
  return (
    <div id="xwros" style={{overlflowX: 'hidden'}} className="container-fluid blog">
        <div className="container text-center pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
            <h4 className="text-uppercase text-primary">{facility.overtitle}</h4>
            <h1 className="display-3  mb-3">{facility.title}</h1>

        </div>
        <div className="row g-4 justify-content-center">
            <div className="blog-item">
            <div className="row">
                {/* Left column with Swiper */}
                
                <div className="col-md-12 col-lg-12 col-xl-12">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    slidesPerView={3.6}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 }, // mobile
                        640: { slidesPerView: 2 }, // tablets
                        1024: { slidesPerView: 3 }, // desktops
                    }}
                >
                    {facility.photos && facility.photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}${photo.url}`}
                                className="img-fluid w-100"
                                alt={`slide ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))} 
                    
                </Swiper>
                </div>

                {/* Right column with content */}
                
            </div>
            </div>
        </div>
    </div>
  );
}
