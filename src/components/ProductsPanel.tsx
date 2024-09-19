import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import type { MenuProps } from "antd";
import { Button, Dropdown, Flex } from "antd";
import ProductInfoCard from "./ProductInfoCard";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const ProductsPanel = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Dropdown menu={{ items }} placement="bottom">
          <Button>bottom</Button>
        </Dropdown>
      </Flex>
      <ProductInfoCard />
    </>
  );
};

export default ProductsPanel;
