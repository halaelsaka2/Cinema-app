import { Col, Modal, Row } from "antd";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";

const VideoModal = (props) => {
  const { visible, handleOk, handleCancel } = props;
  const [playing, setPlaying] = useState(true);
  const cancelHandler = () => {
    setPlaying(false);
    handleCancel();
  };
  return (
    <Modal
      width={700}
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
          // playing={playing}
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
