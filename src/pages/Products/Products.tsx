import { menuData } from "../../features/menu/menuData";
import MultiLevelMenu from "../../features/menu/MultiLevelMenu";
import ProductsList from "../../features/products/productsList";

const Products = () => {
  return (
    <>
      <MultiLevelMenu menu={menuData} />
      <ProductsList />
    </>
  );
};
export default Products;
