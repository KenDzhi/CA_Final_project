import ProductsPageComponent from "./components/ProductsPageComponent";
import axios from "axios"

const fetchProducts = async () => {
  const {data} = await axios.get("/api/products/admin")
  return data
}

const AdminProductsPage = () => {
  return <ProductsPageComponent fetchProducts={fetchProducts} />
};

export default AdminProductsPage;
