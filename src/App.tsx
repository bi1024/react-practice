import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { DatePicker } from "antd";
// import DatePicker from "antd";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import SiderLeft from "./components/SiderLeft";
import SearchBar from "./components/SearchBar";
import ProductsPanel from "./components/ProductsPanel";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  alignContent: "center",
  color: "#fff",
  height: "5rem",
  // paddingInline: 48,
  // lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  height: "100vh",
  // borderRadius: 8,
  overflow: "hidden",
  // width: "calc(100% - 8px)",
  // maxWidth: "calc(100% - 8px)",
};

function App() {
  return (
    <>
      <Layout style={layoutStyle}>
        <SiderLeft />
        <Layout>
          <Header style={headerStyle}>
            <SearchBar />
          </Header>
          <Content style={contentStyle}>
            <ProductsPanel />
          </Content>
        </Layout>
        <Sider width="25%" style={siderStyle}>
          Edit Products
        </Sider>
      </Layout>
    </>
  );
}

export default App;
