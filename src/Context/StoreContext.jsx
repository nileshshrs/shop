import { createContext, useEffect, useState } from "react";
import axios from "axios";

const StoreContext = createContext();

export function StoreProvider({ children }) {

  const URL =
    "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(URL, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Warehouse-Id": "1",
        },
      });
      setProducts(res.data.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return <StoreContext.Provider value={{products, loading}}>{children}</StoreContext.Provider>;
}
export default StoreContext;