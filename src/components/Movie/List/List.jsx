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

export default function List({ films }) {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, EffectCoverflow]}
        className="popular_swiper"
      >
        {films.map((item, index) => (
          <SwiperSlide key={index} style={{ height: "560px" }}>
            <li className={css.movie_item}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                <Item item={item} />
              </Link>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}
