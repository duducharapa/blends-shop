import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import { InputNumberValueChangeEvent } from 'primereact/inputnumber'
import Product from '../../interfaces/Product';
import React, { useRef, useState } from 'react';
import { TotalLabel } from './TotalLabel';
import { useItems } from '../../hooks/items';
import { OrderItem } from '../../interfaces/OrderItem';
import { PriceLabel } from './PriceLabel';
import { ProductFooter } from './ProductFooter';

import classNames from './product-card.module.css';
import { Toast } from 'primereact/toast';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const toast = useRef<Toast>(null);
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useItems();

  const onQuantityChange = (e: InputNumberValueChangeEvent) => setQuantity(e.value || 0);

  const onConfirmButton = () => {
    if (quantity <= 0) return;
    
    const orderItem: OrderItem = {
      product,
      quantity
    };
    
    addItem(orderItem);
    setQuantity(0);
  }

  const footer = () => <ProductFooter
    quantity={quantity}
    onConfirmButton={onConfirmButton}
    onQuantityChange={onQuantityChange}
  />;
  
  return (
    <>
      <Card title={product.name} footer={footer} className={`text-primary ${classNames.cardbody}`}>
        <div className='flex w-100 justify-content-center'>
          <div className={`relative ${classNames.imagecontainer}`}>
            <Image
              src={product.image} alt={product.name} width='250' preview className='border-round'
            />
            <div className={`absolute bg-primary bottom-0 right-0 p-2 ${classNames.unitpricecontainer}`}>
              <PriceLabel price={product.price} />
            </div>
          </div>
        </div>
        <p className='m-0 mt-3 mb-2 text-sm font-light text-color-secondary'>
          {product.description}
        </p>
        <TotalLabel price={product.price} quantity={quantity} />
      </Card>

      <Toast ref={toast} />
    </>
  );
}

export default ProductCard;