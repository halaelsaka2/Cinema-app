import { Row, Col, Input, Layout, Menu, Dropdown, Space } from "antd";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import { DownOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
import { getMoviesBySearch, saveSearchKeyword } from "../../Redux/Movie/Actions";

import "./style.css";
import { connect } from "react-redux";
import SearchMovies from "../../Components/SearchMovies";
const debounce = require("lodash.debounce");
const { Header, Footer, Content } = Layout;
const { Search } = Input;
const LayoutComponent = (props) => {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const menu = (
    <Menu mode="vertical">
      <Menu.Item key="0"> {localStorage.getItem("userName")}</Menu.Item>
      <Menu.Item key="1">
        <h4 onClick={logOut}>Log Out</h4>
      </Menu.Item>
    </Menu>
  );
  const onSearch = debounce((e, value) => {
    props.getMoviesBySearch(e.target.value);
    props.saveSearchKeyword(e.target.value);
    props.history.push("/cinemaApp/search");
  }, 1000);
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "black",
          paddingBottom: "5rem",
          borderBottom: ".5px solid #979797",
          padding: "0 13px 0 50px",
        }}
      >
        <Row gutter={24}>
          <Col span={8}>
            <img src="/assets/images/logo.svg" />
          </Col>
          <Col span={8} style={{ display: "flex", alignItems: "center" }}>
            <Search
              placeholder="input search text"
              allowClear
              // onSearch={onSearch}
              onChange={onSearch}
              className="custom_search"
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={8} pull={2} align="right">
            <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
              <a className="ant-dropdown-link" style={{ color: "white" }} onClick={(e) => e.preventDefault()}>
                <Space>
                  {/* <img src="/assets/images/"/> */}
                  {localStorage.getItem("userName")}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px", backgroundColor: "black" }}>
        <Switch>
          <Route path="/cinemaApp" exact component={Home} />
          <Route path="/cinemaApp/search" component={SearchMovies} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor: "black", color: "white" }}>
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

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { getMoviesBySearch, saveSearchKeyword };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutComponent));
