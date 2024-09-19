import { Layout } from "antd";
import type { MenuProps } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import NavMenu from "./NavMenu";

const { Header, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Products",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Item 1",
        type: "group",
        children: [
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ],
      },
      {
        key: "g2",
        label: "Item 2",
        type: "group",
        children: [
          { key: "3", label: "Option 3" },
          { key: "4", label: "Option 4" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub2",
    label: "Orders",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
    ],
  },
];

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: "5rem",
  // paddingInline: 48,
  // lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const SiderLeft = () => {
  return (
    <Sider width="10%" style={siderStyle}>
      <Header style={headerStyle}>
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.WhjXvSXPAOCTw9XRqOuTbgHaIE?rs=1&pid=ImgDetMain"
        ></img>
      </Header>
      <NavMenu items={items} />
    </Sider>
  );
};

export default SiderLeft;
