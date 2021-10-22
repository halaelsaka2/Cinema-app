import { Row, Col, Input, Button, Layout, Space, Form } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Header, Footer, Content } = Layout;
const Login = (props) => {
  const { lg, sm, xs, xl, md, xxl } = useBreakpoint();
  const submitForm = (values) => {
    localStorage.setItem("userName", values.userName);
    localStorage.setItem("password", values.password);
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "/cinemaApp";
  };
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "black", padding: "0 13px 0 50px" }}>
          <Row gutter={[16, 16]}>
            <Col lg={12} xl={12} xxl={12} md={12} sm={12} xs={12}>
              <img src="/assets/images/logo.svg" width={lg || md ? 90 : sm || xs ? 60 : 90} />
            </Col>
            {(xl || xxl || lg || md) && (
              <Col lg={12} xl={12} xxl={12} md={12} sm={12} xs={12} align="right" style={{ paddingRight: "0" }}>
                <img src="/assets/images/login-shape.svg" height="570px" />
              </Col>
            )}
          </Row>
        </Header>
        <Content
          style={{
            padding: "0 50px",
            backgroundColor: "black",
            minHeight: lg || md ? "443px" : sm || xs ? "360px" : "443px",
          }}
        >
          <Form onFinish={submitForm}>
            <Row
              gutter={24}
              justify={lg || md ? "start" : sm || xs ? "center" : "start"}
              style={{ marginBottom: "1rem" }}
            >
              <Col lg={8} xl={8} xxl={8} md={12} sm={16} xs={20}>
                <Form.Item
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: `Please Input UserName`,
                    },
                  ]}
                >
                  <Input
                    size={"middle"}
                    bordered={false}
                    placeholder="Username"
                    style={{
                      borderBottom: "1.5px solid gray",
                      fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
                      color: "lightgray",
                      marginTop: "3rem",
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: `Please Input Password`,
                    },
                  ]}
                >
                  <Input
                    size={"middle"}
                    type="password"
                    bordered={false}
                    placeholder="Password"
                    style={{
                      borderBottom: "1.5px solid gray",
                      color: "lightgray",
                      marginTop: "3rem",
                      fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
                    }}
                  />
                </Form.Item>
                <Button
                  type="ghost"
                  htmlType="submit"
                  size={lg || md ? "middle" : sm || xs ? "small" : "middle"}
                  style={{
                    fontWeight: lg || md ? 600 : sm || xs ? 550 : 600,
                    padding: "0 2rem",
                    marginTop: "2rem",
                    color: "white",
                    borderColor: "#FFCC33",
                    fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
                  }}
                >
                  Log In
                </Button>
              </Col>
            </Row>
          </Form>
        </Content>
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
                />
                <img
                  src="/assets/images/twitter.svg"
                  style={{
                    fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
                  }}
                />
                <img
                  src="/assets/images/instagram.svg"
                  style={{
                    fontSize: lg || md ? "16px" : sm || xs ? " 13px" : "16px",
                  }}
                />
              </Space>
              <div>© 2021 Cinema App - All Right Reserved</div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
};
export default Login;
