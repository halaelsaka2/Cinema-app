import { Row, Col, Input, Button, Layout, Space, Form } from "antd";
import HeaderContent from "../../Components/HeaderContent";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import "./style.css";
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const LayoutComponent = (props) => {
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <Layout>
      <Header style={{ backgroundColor: "black", padding: "0 13px 0 50px" }}>
        <Row gutter={24}>
          <Col span={8}>
            <img src="/assets/images/logo.svg" />
          </Col>
          <Col span={8} style={{ display: "flex", alignItems: "center" }}>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              className="custom_search"
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={8} pull={2} align="right" >
            <h3 style={{ color: "white" }}>{localStorage.getItem("userName")}</h3>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px", backgroundColor: "black", height: "443px" }}>
        <Switch>
          <Route path="/cinemaApp" component={Home} />
        </Switch>
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
  );
};
export default LayoutComponent;
