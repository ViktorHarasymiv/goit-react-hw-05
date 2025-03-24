import { Link, useLocation } from "react-router-dom";
import Item from "./../Item/Item";
import css from "./List.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

// import required modules
import { EffectCoverflow } from "swiper/modules";

export default function List({ loading, films }) {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, EffectCoverflow]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        className="popular_swiper"
      >
        {films.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              maxHeight: "560px",
              minWidth: "360px",
              marginBlock: "60px",
            }}
          >
            <li className={css.movie_item}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                <Item loading={loading} item={item} />
              </Link>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}
