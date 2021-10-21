import { Row } from "antd";

import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper/core";
import Movie from "../Movie";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const HomeMovie = (props) => {
  return (
    <Row gutter={[16, 16]}>
      <Swiper
        spaceBetween={50}
        slidesPerView={5.5}
        navigation
        scrollbar={{ draggable: true }}
        style={{ color: "white" }}
        onReachEnd={(e) => console.log(e, "ENNNNNNNNNNNNNNNNND")}
      >
        {props.data.length > 0 ? (
          props.data.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Movie movie={movie} />
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </Row>
  );
};

export default HomeMovie;
