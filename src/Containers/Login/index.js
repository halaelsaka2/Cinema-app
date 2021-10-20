import { Row, Col, Input, Button, Layout, Space, Form } from "antd";
import HeaderContent from "../../Components/HeaderContent";

const { Header, Footer, Sider, Content } = Layout;
const Login = () => {
  const submitForm = (values) => {
    console.log(values);
    localStorage.setItem("userName", values.userName);
    localStorage.setItem("password", values.password);
    localStorage.setItem("isLoggedIn", true);
  };
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "black", padding: "0 13px 0 50px" }}>
          <Row gutter={24}>
            <Col span={12}>
              <img src="/assets/images/logo.svg" />
            </Col>
            <Col span={12} align="right" style={{ paddingRight: "0", zIndex: 100 }}>
              <img src="/assets/images/login-shape.svg" height="575px" />
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: "0 50px", backgroundColor: "black", height: "443px" }}>
          <Form onFinish={submitForm}>
            <Row gutter={24}>
              <Col span={8}>
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
                    bordered={false}
                    placeholder="Username"
                    style={{ borderBottom: "1.5px solid gray", color: "lightgray", marginTop: "3rem" }}
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
                    type="password"
                    bordered={false}
                    placeholder="Password"
                    style={{ borderBottom: "1.5px solid gray", color: "lightgray", marginTop: "3rem" }}
                  />
                </Form.Item>
                <Button
                  type="ghost"
                  htmlType="submit"
                  style={{
                    fontWeight: 600,
                    padding: "0 2rem",
                    marginTop: "2rem",
                    color: "white",
                    borderColor: "#FFCC33",
                  }}
                >
                  Log In
                </Button>
              </Col>
            </Row>
          </Form>
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "black", color: "white", padding: 13 }}>
          <Row justify="center">
            <Col>
              <Space>
                <img src="/assets/images/facebook.svg" />
                <img src="/assets/images/twitter.svg" />
                <img src="/assets/images/instagram.svg" />
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
