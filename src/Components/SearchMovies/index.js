import { Row, Col, Pagination } from "antd";
import { connect } from "react-redux";
import { getMoviesBySearch } from "../../Redux/Movie/Actions";
import Movie from "../Movie";
const SearchMovies = (props) => {
  const paginateHandler = (page) => {
    props.getMoviesBySearch(props.searchKeyword, page);
  };
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
        {props.moviesBySearch.length > 0 ? (
          props.moviesBySearch.map((movie) => (
            <Col
              key={movie.id}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Movie movie={movie} />
            </Col>
          ))
        ) : (
          <div style={{ color: "white" }}>No Movies</div>
        )}
      </Row>
      <Row gutter={24} justify="center">
        <Col span={24} align="center" style={{ marginTop: "2rem" }}>
          <Pagination
            // simple={true}
            total={props.countOfMoviesBySearch}
            responsive={true}
            hideOnSinglePage={true}
            onChange={paginateHandler}
            pageSize={20}
            className="custom_pagination"
            showSizeChanger={false}
            showQuickJumper={false}
          />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesBySearch: state.MovieReducer.moviesBySearch,
    countOfMoviesBySearch: state.MovieReducer.countOfMoviesBySearch,
    searchKeyword: state.MovieReducer.searchKeyword,
  };
};
const mapDispatchToProps = { getMoviesBySearch };

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
