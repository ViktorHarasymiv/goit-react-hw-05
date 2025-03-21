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
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function List({ data }) {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Navigation, EffectCoverflow, Pagination]}
        className="popular_swiper"
      >
        {data.map((item, index) => (
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
