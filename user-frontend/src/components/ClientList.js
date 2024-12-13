import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import client01 from "../img/clients/client1.png";
import client02 from "../img/clients/client2.png";
import client03 from "../img/clients/client3.png";
import client04 from "../img/clients/client4.jpg";
import client05 from "../img/clients/client5.png";
import client06 from "../img/clients/client6.jpg";
import client07 from "../img/clients/client7.jpg";
import client08 from "../img/clients/client8.jpg";
import client09 from "../img/clients/client9.jpg";
import client10 from "../img/clients/client10.jpg";
import client11 from "../img/clients/client11.jpg";
import client12 from "../img/clients/client12.png";
import client13 from "../img/clients/client13.jpg";
import client14 from "../img/clients/client14.jpg";
import client15 from "../img/clients/client15.png";

const ClientList = () => {
  return (
    <>
      <section id="clients" className="clients">
        <div className="container" data-aos="zoom-out">
          <div className="section-header">
            <h2>Our Clients</h2>
          </div>
          <div className="clients-slider swiper">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src={client01} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client02} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client03} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client04} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client05} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client06} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client07} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client08} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client09} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client10} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client11} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client12} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client13} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client14} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client15} className="img-fluid" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section >
    </>
  );
};

export default ClientList;
