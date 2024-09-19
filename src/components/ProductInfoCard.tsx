import { Card, Image, Flex } from "antd";

const ProductInfoCard: React.FC = () => {
  {
    return (
      <Card style={{ height: "5rem", textAlign: "center" }}>
        <Flex justify="space-between" align="center">
          <Image
            height={"3rem"}
            src="https://th.bing.com/th/id/OIP.NZNegUMglMH6lFOB3GlVFwHaHE?rs=1&pid=ImgDetMain"
          />
          <span>Id</span>
          <span>Product Name</span>
          <span>Inventory</span>
          <span>Price</span>
        </Flex>
      </Card>
    );
  }
};

export default ProductInfoCard;
