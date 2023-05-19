import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Image } from 'primereact/image'
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber'
import Product from '../../interfaces/Product';
import React, { useState } from 'react';
import { TotalLabel } from './TotalLabel';
import { useItems } from '../../hooks/items';
import OrderItem from '../../interfaces/OrderItem';
import { PriceLabel } from './PriceLabel';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useItems();

  const onQuantityChange = (e: InputNumberValueChangeEvent) => setQuantity(e.value || 0);

  const onConfirmButton = () => {
    const orderItem: OrderItem = {
      product,
      quantity
    };
    
    addItem(orderItem);

    setQuantity(0);
  }

  const footer = () => (
    <div className='w-100 flex justify-content-between'>
        <InputNumber
          value={quantity} onValueChange={onQuantityChange}
          showButtons buttonLayout='horizontal' min={0} max={99}
          decrementButtonClassName='p-button-danger' incrementButtonClassName='p-button-primary' inputClassName='w-4rem md:w-3rem'
          decrementButtonIcon='pi pi-minus' incrementButtonIcon='pi pi-plus'
        />
        <Button raised label='Adicionar' onClick={onConfirmButton} className='p-ripple' />
    </div>
  );
  
  return (
    <Card title={product.name} footer={footer} className='text-primary' style={{ backgroundColor: '#FBF5F3' }}>
      <div className='flex w-100 justify-content-center'>
        <div className='relative' style={{ width: '250px', height: '250px' }}>
          <Image
            src={product.image}
            alt={product.name} width='250' preview className='border-round'
          />
          <div
            className='absolute bg-primary bottom-0 right-0 p-2'
            style={{ borderTopLeftRadius: '6px', border: '2px solid #CD135E', borderBottomWidth: '0px', borderRightWidth: '0px' }}
          >
            <PriceLabel price={product.price} />
          </div>
        </div>
      </div>
      
      <p className="m-0 mt-3 mb-2 text-sm font-light text-color-secondary">
        {product.description}
      </p>

      <TotalLabel price={product.price} quantity={quantity} />
    </Card>
  );
}

export default ProductCard;