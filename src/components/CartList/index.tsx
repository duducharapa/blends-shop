import { useItems } from "../../hooks/items";
import { ItemCard } from "../ItemCard";

const CartList: React.FC = () => {
  const { items } = useItems();

  return (
    <div>
      {
        items.map(item => <ItemCard item={item} />)
      }
    </div>
  );
}

export {
  CartList
};