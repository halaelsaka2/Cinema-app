import { Row } from "antd";

import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper/core";
import Movie from "../Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const HomeMovie = (props) => {
  const { lg, sm, xl, md, xxl } = useBreakpoint();
  return (
    <Row gutter={[16, 16]}>
      <Swiper
        spaceBetween={50}
        slidesPerView={xl || xxl ? 5.5 : lg ? 4 : md ? 3 : sm ? 2 : 1}
        navigation
        scrollbar={{ draggable: true }}
        style={{ color: "white", textAlign: "center" }}
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
