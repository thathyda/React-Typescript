import { useEffect, useState } from "react";
import CardComponent from "./Card/CardProducts";
import LoadingComponent from "../ELSComponent/LoadingComponent";
import ErrorComponent from "../ELSComponent/ErrorComponent";
import ButtonCreateProduct from "../ButtonCreateProduct";

export type Product = {
  readonly id?: number;
  title: string;
  price: string;
  image: string;
};

const HomeComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const fetchProducts = await fetch("https://fakestoreapi.com/products");
      if (!fetchProducts.ok) {
        throw new Error("Failed to fetch products");
      }
      const productsData = await fetchProducts.json();
      console.log(productsData);
      setProducts(productsData);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ButtonCreateProduct/>
      {loading ? (<LoadingComponent />) : error ? (<ErrorComponent />):(
        <div className="flex justify-center gap-4 flex-wrap">
          {products.map((product, index) => (
            <CardComponent
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
