import { Button } from 'primereact/button';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import React from 'react';

interface ProductFooterProps {
  quantity: number;
  onQuantityChange: (e: InputNumberValueChangeEvent) => void;
  onConfirmButton: () => void;
}

const ProductFooter: React.FC<ProductFooterProps> = ({ quantity, onQuantityChange, onConfirmButton }) => {
  return (
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
}

export {
  ProductFooter
};