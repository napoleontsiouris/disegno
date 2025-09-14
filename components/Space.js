"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Space() {
    const description = `<h4>Ο χώρος μας</h4><p>Στο φροντιστήριο σχεδίου Disegno, ο χώρος μας έχει σχεδιαστεί με γνώμονα την άνεση και τη δημιουργικότητα των μαθητών μας. Βρίσκεται σε μια ήσυχη γειτονιά, προσφέροντας ένα περιβάλλον ιδανικό για συγκέντρωση και έμπνευση.</p>`;
  return (
    <div id="xwros" className="container-fluid blog">
      <div className="row g-4 justify-content-center">
        <div className="blog-item">
          <div className="row">
            {/* Left column with Swiper */}
            <div className="col-md-7 col-lg-7 col-xl-7 no-padding">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="mySwiper"
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
              </Swiper>
            </div>

            {/* Right column with content */}
            <div className="col-md-5 col-lg-5 col-xl-5 align-self-center">
              <div className="blog-content rounded-bottom p-4">
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
