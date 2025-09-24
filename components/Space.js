// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Space() {
    const description = `<h4>Ο χώρος μας</h4><p>Στο φροντιστήριο σχεδίου Disegno, ο χώρος μας έχει σχεδιαστεί με γνώμονα την άνεση και τη δημιουργικότητα των μαθητών μας. Βρίσκεται σε μια ήσυχη γειτονιά, προσφέροντας ένα περιβάλλον ιδανικό για συγκέντρωση και έμπνευση.</p>`;
  return (
    <div id="xwros" className="container-fluid blog">
        <div className="container text-center pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} >
            <h4 className="text-uppercase text-primary">Ο ΧΩΡΟΣ ΜΑΣ</h4>
            <h1 className="display-3  mb-3">Ένας χώρος αφιερωμένος στη δημιουργία</h1>

        </div>
        <div className="row g-4 justify-content-center">
            <div className="blog-item">
            <div className="row">
                {/* Left column with Swiper */}
                
                <div className="col-md-12 col-lg-12 col-xl-12 no-padding">
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
                    <SwiperSlide>
                    <img
                        src="/img/1000002785.jpg"
                        className="img-fluid w-100"
                        alt="slide 1"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002786.jpg"
                        className="img-fluid w-100"
                        alt="slide 2"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002787.jpg"
                        className="img-fluid w-100"
                        alt="slide 3"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002785.jpg"
                        className="img-fluid w-100"
                        alt="slide 1"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002786.jpg"
                        className="img-fluid w-100"
                        alt="slide 2"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002787.jpg"
                        className="img-fluid w-100"
                        alt="slide 3"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002785.jpg"
                        className="img-fluid w-100"
                        alt="slide 1"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002786.jpg"
                        className="img-fluid w-100"
                        alt="slide 2"
                    />
                    </SwiperSlide>
                    <SwiperSlide>
                    <img
                        src="/img/1000002787.jpg"
                        className="img-fluid w-100"
                        alt="slide 3"
                    />
                    </SwiperSlide>
                </Swiper>
                </div>

                {/* Right column with content */}
                
            </div>
            </div>
        </div>
    </div>
  );
}
