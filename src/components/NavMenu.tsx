import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];//stolen from the ant design page
const NavMenu = ({items}:MenuItem)=>{
    return (
        <Menu
        // onClick={onClick}
        // style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    );
}
export default NavMenu;