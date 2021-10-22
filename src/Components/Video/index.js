import { Col, Modal, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";

const VideoModal = (props) => {
  const { lg, sm, xs, xl, md, xxl } = useBreakpoint();
  const { visible, handleOk, handleCancel } = props;
  const [playing, setPlaying] = useState(true);
  const cancelHandler = () => {
    setPlaying(false);
    handleCancel();
  };
  return (
    <Modal
      width={xxl || xl ? 900 : lg || md ? 600 : sm ? 400 : 250}
      bodyStyle={{ backgroundColor: "black", minHeight: "250px" }}
      closable={false}
      footer={false}
      visible={visible}
      onOk={handleOk}
      onCancel={cancelHandler}
    >
      {props.keyTrailer ? (
        <ReactPlayer
          stopOnUnmount={true}
          width={xxl || xl ? 900 : lg || md ? 600 : sm ? 400 : 250}
          controls
          url={`https://www.youtube.com/watch?v=${props.keyTrailer}`}
        />
      ) : (
        <Row gutter={24} justify="center">
          <Col span={24} align="center">
            <h3 style={{ color: "white" }}>No Trailer Video</h3>
          </Col>
        </Row>
      )}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    keyTrailer: state.MovieReducer.keyTrailer,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);
