import { Row, Col, Input, Layout, Menu, Dropdown, Space } from "antd";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import { DownOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
import { getMoviesBySearch, saveSearchKeyword } from "../../Redux/Movie/Actions";

import "./style.css";
import { connect } from "react-redux";
import SearchMovies from "../../Components/SearchMovies";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import FooterComponent from "../../Components/Footer";
const debounce = require("lodash.debounce");
const { Header, Content } = Layout;
const { Search } = Input;
const LayoutComponent = (props) => {
  const { lg, sm, xs, md } = useBreakpoint();

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const menu = (
    <Menu mode="vertical" style={{ backgroundColor: "#525252", color: "lightgray" }}>
      <Menu.Item key="0">{localStorage.getItem("userName")}</Menu.Item>
      <Menu.Item key="1">
        <h4 onClick={logOut}>Log Out</h4>
      </Menu.Item>
    </Menu>
  );
  const onSearch = debounce((e, value) => {
    props.getMoviesBySearch(e.target.value);
    props.saveSearchKeyword(e.target.value);
    props.history.push(`/cinemaApp/search`);
  }, 1000);
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "black",
          paddingBottom: "5rem",
          borderBottom: ".5px solid #979797",
          padding: lg || md ? "0 13px 0 50px" : sm || xs ? "0 8px 0 20px" : "0 13px 0 50px",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col lg={8} xl={8} xxl={8} md={8} sm={6} xs={6}>
            <img
              onClick={() => props.history.push("/cinemaApp")}
              src="assets/images/logo.svg"
              width={lg || md ? 90 : sm || xs ? 40 : 90}
              alt="logo"
            />
          </Col>
          <Col
            lg={8}
            xl={8}
            xxl={8}
            md={8}
            sm={12}
            xs={12}
            style={{ display: "flex", alignItems: "center" }}
            align="right"
          >
            <Search
              placeholder="search"
              allowClear
              onChange={onSearch}
              className="custom_search"
              style={{ width: "100%", fontSize: lg || md ? "16px" : sm || xs ? " 10px" : "16px" }}
              size={lg || md ? "middle" : sm || xs ? "small" : "middle"}
            />
          </Col>
          <Col lg={8} xl={8} xxl={8} md={8} sm={6} xs={6} align="right">
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger={["click"]}
              overlayStyle={{ borderRadius: "10px" }}
            >
              <a
                className="ant-dropdown-link"
                style={{ color: "white", fontSize: lg || md ? "16px" : sm || xs ? " 10px" : "16px" }}
                onClick={(e) => e.preventDefault()}
                href="."
              >
                <Space>
                  {lg || md
                    ? localStorage.getItem("userName")
                    : sm || xs
                    ? "Profile"
                    : localStorage.getItem("userName")}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Content
        style={{ padding: lg || md ? " 0 50px" : sm || xs ? " 0 20px" : " 0 50px", backgroundColor: "black" }}
      >
        <Switch>
          <Route path={"/cinemaApp"} exact component={Home} />
          <Route path={"/cinemaApp/search"} component={SearchMovies} />
        </Switch>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { getMoviesBySearch, saveSearchKeyword };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutComponent));
