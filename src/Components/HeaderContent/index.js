import { Row, Col } from "antd";
const HeaderContent = (props) => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <img src="/assets/images/logo.svg" />
      </Col>
      <Col span={12} align="right" style={{ paddingRight: "0", zIndex: 100 }}>
        <img src="/assets/images/login-shape.svg" height="575px" />
      </Col>
    </Row>
  );
};
export default HeaderContent;
