import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CommentOutlined,
  TransactionOutlined
} from "@ant-design/icons";

import KillOneNumber from "./pages/KillOneNumber";
import KillTwoNumber from "./pages/KillTwoNumber";
import KillThreeNumber from "./pages/KillThreeNumber";
import StarsRandom from "./pages/StarsRandom";
import "./App.less";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, toggle] = useState(false);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              height: "100vh",
            }}
          >
            <div className="logo"></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<CommentOutlined />}>
                <Link to="/">杀1码</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="/kill-two-number">杀2码</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                <Link to="/kill-three-number">杀3码</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<TransactionOutlined />}>
                <Link to="/stars-random">几星随选</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => {
                    toggle(!collapsed);
                  },
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/" exact>
                  <KillOneNumber></KillOneNumber>
                </Route>
                <Route path="/kill-two-number" exact>
                  <KillTwoNumber></KillTwoNumber>
                </Route>
                <Route path="/kill-three-number" exact>
                  <KillThreeNumber></KillThreeNumber>
                </Route>
                <Route path="/stars-random" exact>
                  <StarsRandom></StarsRandom>
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
