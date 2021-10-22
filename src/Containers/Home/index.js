import { Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useEffect } from "react";
import { connect } from "react-redux";
import Movie from "../../Components/HomeMovies";
import { getPopularMovies, getTopRatedMovies } from "../../Redux/Movie/Actions";

const Home = (props) => {
  const { lg, sm, xs, xl, md, xxl } = useBreakpoint();
  useEffect(() => {
    props.getPopularMovies(1);
    props.getTopRatedMovies(1);
  }, []);
  return (
    <>
      <Row justify="start">
        <h3
          style={{ color: "white", margin: "2rem 0", fontSize: lg || md ? " 16px" : sm || xs ? " 10px" : "16px" }}
        >
          {" "}
          Most Popular
        </h3>
      </Row>
      <Movie data={props.popularMovies} />

      <Row justify="start">
        <h3
          style={{ color: "white", margin: "2rem 0", fontSize: lg || md ? " 16px" : sm || xs ? " 10px" : "16px" }}
        >
          {" "}
          Top Rated
        </h3>
      </Row>
      <Movie data={props.topRatedMovies} />
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    popularMovies: state.MovieReducer.popularMovies,
    topRatedMovies: state.MovieReducer.topRatedMovies,
  };
};
const mapDispatchToProps = { getPopularMovies, getTopRatedMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
