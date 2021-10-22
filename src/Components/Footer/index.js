import { Col, Row, Space, Layout } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const FooterComponent = () => {
  const { Footer } = Layout;
  const { lg, sm, xs, md } = useBreakpoint();
  return (
    <Footer
      style={{
        textAlign: "center",
        fontSize: lg || md ? "16px" : sm || xs ? "13px" : "16px",
        backgroundColor: "black",
        color: "white",
        padding: lg || md ? 13 : sm || xs ? 8 : 13,
      }}
    >
      <Row justify="center">
        <Col>
          <Space>
            <img
              src="/assets/images/facebook.svg"
              style={{
                fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
              }}
              alt="facebook"
            />
            <img
              src="/assets/images/twitter.svg"
              style={{
                fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
              }}
              alt="twitter"
            />
            <img
              src="/assets/images/instagram.svg"
              style={{
                fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
              }}
              alt="instagram"
            />
          </Space>
          <div
            style={{
              fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
            }}
          >
            © 2021 Cinema App - All Right Reserved
          </div>
        </Col>
      </Row>
    </Footer>
  );
};
export default FooterComponent;
