import { Row } from "antd";

import SwiperCore, { Pagination, Navigation, Scrollbar } from "swiper/core";
import Movie from "../Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { getPopularMovies, getTopRatedMovies } from "../../Redux/Movie/Actions";
import { connect } from "react-redux";
import { useState } from "react";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const HomeMovie = (props) => {
  const [currentPopularPage, setCurrentPopularPage] = useState(1);
  const [currentTopRatedPage, setCurrentTopRatedPage] = useState(1);
  const { lg, sm, xl, md, xxl } = useBreakpoint();

  return (
    <Row gutter={[16, 16]}>
      <Swiper
        spaceBetween={50}
        slidesPerView={xl || xxl ? 5 : lg ? 4 : md ? 3 : sm ? 2 : 1}
        navigation
        scrollbar={{ draggable: true }}
        style={{ color: "white", textAlign: "center" }}
        onSlideChange={(e) => {
          if (e.isEnd === true) {
            if (props.type === "popular") {
              props.getPopularMovies(currentPopularPage + 1);
            } else {
              props.getTopRatedMovies(currentTopRatedPage + 1);
            }
            e.slideTo(0);
          }
        }}
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
const mapStateToProps = (state, ownProps) => {
  return {
    currentPopularPage: state.MovieReducer.currentPopularPage,
    currentTopRatedPage: state.MovieReducer.currentTopRatedPage,
  };
};
const mapDispatchToProps = {
  getPopularMovies,
  getTopRatedMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeMovie);
