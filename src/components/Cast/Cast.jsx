import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { fetchDetails } from "./../../movieApi";

import CastItem from "./CastItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import css from "./Cast.module.css";

import { MdCloseFullscreen } from "react-icons/md";

// import required modules
import { Navigation } from "swiper/modules";

export default function Cast() {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handelClick = async () => {
      try {
        setCredits([]);
        const dataCredits = await fetchDetails(id, "/credits");
        setCredits(dataCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    handelClick();
  }, [id]);

  const close = () => {
    if (location.pathname === `/movies/${id}/cast`) {
      navigate(`/movies/${id}`);
      return;
    }
  };

  return (
    <div className={css.cast_tab}>
      {credits && (
        <ul>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {credits.map((cast) => (
              <SwiperSlide style={{ width: "100%" }}>
                <li key={cast.id}>
                  <CastItem dataCast={cast} />
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      )}
      <a onClick={close} className={css.back_button}>
        <MdCloseFullscreen />
      </a>
    </div>
  );
}
