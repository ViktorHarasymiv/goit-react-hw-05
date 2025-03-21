import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { fetchDetails } from "./../../movieApi";

import css from "./Reviews.module.css";
import { MdCloseFullscreen } from "react-icons/md";

import ReviewsItem from "./ReviewsItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handelClick = async () => {
      try {
        setReviews([]);
        const dataCredits = await fetchDetails(id, "/reviews");
        setReviews(dataCredits.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    handelClick();
  }, [id]);

  const close = () => {
    if (location.pathname === `/movies/${id}/reviews`) {
      navigate(`/movies/${id}`);
      return;
    }
  };

  return (
    <div className={css.reviews_tab}>
      {reviews !== null && reviews.length === 0 && (
        <p>{`We don't have any reviews for this movie`}</p>
      )}
      {reviews && (
        <ul className={css.reviews_list}>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide style={{ width: "100%" }}>
                <li key={review.id} className={css.review_item}>
                  <ReviewsItem dataReviews={review} />
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
