import { isAxiosError } from "axios";
import api from "./api";
import { OrderItemRequest } from "../interfaces/OrderItem";

interface CreateOrderRequestBody {
  items: OrderItemRequest[]
};

const createOrder = async (orderDetails: OrderItemRequest[]) => {
  try {
    const requestData: CreateOrderRequestBody = { items: orderDetails };
    const { status, data } = await api.post("/orders", requestData);

    if (status === 201) return data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log("error: ", err.message);
    }
  }
}

export {
  createOrder
};