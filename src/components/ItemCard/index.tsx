import { Image } from "primereact/image";
import maskPrice from "../../utils/maskPrice";
import { Button } from "primereact/button";
import OrderItem from "../../interfaces/OrderItem";
import { useItems } from "../../hooks/items";
import classNames from './item-card.module.css';

interface ItemCardProps {
  item: OrderItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { product, quantity } = item;
  const { removeItem } = useItems();

  const nameLabel = `${quantity}x ${product.name}`;

  const onClick = (item: OrderItem) => {
    removeItem(item);
  }

  return (
    <div className={`p-4 flex gap-1 md:gap-0 flex-column md:flex-row justify-content-between ${classNames.cardcontainer}`}>
      <div className='flex flex-column md:flex-row justify-content-center md:justify-content-start'>
        <Image src={product.image} width='100' className='border-round align-self-center' />
        <div className='ml-0 md:ml-3 mt-2 md:mt-0 text-color flex flex-column gap-1'>
          <h4 className='font-bold text-xl'>{nameLabel}</h4>
          <p className='text-color-secondary text-sm'>{product.description}</p>
        </div>
      </div>
      <div className='flex flex-column align-items-start md:align-items-end gap-1 text-color'>
        <p className='font-bold text-lg'>
          <span className='text-xl'>R$ </span>
          {maskPrice(quantity * product.price)}
        </p>
        <Button
          severity='danger' aria-label='Excluir item' icon="pi pi-trash" onClick={() => onClick(item)}
          style={{ width: '48px', height: '48px' }}
          className='align-self-end'
        />
      </div>
    </div>
  );
}

export {
  ItemCard
};