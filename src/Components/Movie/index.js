import { useState } from "react";
import { Row, Col, Rate, Typography, Space, Image } from "antd";
import VideoModal from "../Video";
import { getVideosByMovieId } from "../../Redux/Movie/Actions";
import { connect } from "react-redux";

const { Paragraph } = Typography;
const Movie = (props) => {
  const [visible, setVisible] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);
  const cancleHandler = () => {
    setVisible(false);
  };
  const okHandler = () => {
    setVisible(false);
  };
  return (
    <>
      <Image
        preview={{
          visible: false,
          mask: (
            <>
              <Space direction="vertical" style={{ fontSize: "10px" }}>
                <Row gutter={24}>
                  <Col span={24}>
                    <Rate disabled style={{ fontSize: "10px" }} allowHalf value={props.movie.vote_average / 2} />
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={24}>
                    <Paragraph
                      ellipsis={ellipsis ? { rows: 2, expandable: ellipsis, symbol: "more" } : false}
                      style={{ color: "white" }}
                      onClick={() => {
                        setEllipsis(false);
                      }}
                    >
                      {props.movie.overview}
                    </Paragraph>
                  </Col>
                </Row>
              </Space>
            </>
          ),
        }}
        width={200}
        src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`}
        onClick={() => {
          props.getVideosByMovieId(props.movie.id);
          setVisible(true);
        }}
      />
      {visible && <VideoModal visible={visible} handleCancel={cancleHandler} handleOk={okHandler} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { getVideosByMovieId };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
