import axios, { isAxiosError } from "axios";
import Product from "../interfaces/Product";

type ListProduts = () => Promise<Product[]>;

const listProducts: ListProduts = async () => {
  try {
    const { data, status } = await axios.get<Product[]>("http://localhost:8080/products");
    if (status === 200) return data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log("error: " + err.message);
    }
  }

  return [] as Product[];
}

export {
  listProducts
};