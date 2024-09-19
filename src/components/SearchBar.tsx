import {  Flex, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  return (
    <Flex justify="space-between" align="center">
      <span>Premium Quality Product</span>

      <Input
        style={{ width: "50%" }}
        placeholder="default size"
        prefix={<SearchOutlined />}
      />
    </Flex>
  );
};

export default SearchBar;
