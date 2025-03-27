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

import Skeleton from "@mui/material/Skeleton";

// import required modules
import { Navigation } from "swiper/modules";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function List({ data, loading }) {
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
        pagination={true}
        modules={[Navigation, EffectCoverflow, Pagination]}
        className="popular_swiper"
        breakpoints={{
          640: {
            slidesPerView: 1, // Для екранів ширше 640px
          },
          768: {
            slidesPerView: 2, // Для екранів ширше 768px
          },
          1024: {
            slidesPerView: 3, // Для екранів ширше 1024px
          },
          1440: {
            slidesPerView: 4, // Для екранів ширше 1024px
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              maxHeight: "560px",
            }}
            className={css.slide_item_popular}
          >
            {loading ? (
              <Skeleton
                sx={{ bgcolor: " .900" }}
                variant="wave"
                width={`${100}%`}
                height={`clamp(300px, 58vh, 560px)`}
              />
            ) : (
              <li className={css.movie_item}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>
                  <Item item={item} />
                </Link>
              </li>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}
