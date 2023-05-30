import { Button } from 'primereact/button';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { ReactElement, useMemo } from 'react';

interface ProductFooterProps {
  quantity: number;
  onQuantityChange: (e: InputNumberValueChangeEvent) => void;
  onConfirmButton: () => void;
}

/**
 * The interactive product card footer where the user can change the quantity of products he wants
 * and confirms the item.
 * @param {ProductFooterProps} props The component props.
 * @param {number} props.quantity The quantity state of product.
 * @param {function} props.onQuantityChange The function that edits the quantity state value.
 * @param {function} props.onConfirmButton The function executed when user clicks to confirm the addition of product.
 * @return {ReactElement} The card footer UI for a specific product.
 */
const ProductFooter = ({ quantity, onQuantityChange, onConfirmButton }: ProductFooterProps): ReactElement => {
  const disabledButton = useMemo(() => quantity <= 0, [quantity]);

  return (
    <div className='w-100 flex justify-content-between'>
      <InputNumber
        value={quantity} onValueChange={onQuantityChange}
        showButtons buttonLayout='horizontal' min={0} max={99}
        decrementButtonClassName='p-button-danger' incrementButtonClassName='p-button-primary'
        inputClassName='w-4rem md:w-3rem'
        decrementButtonIcon='pi pi-minus' incrementButtonIcon='pi pi-plus'
      />
      <Button raised disabled={disabledButton} label='Adicionar' onClick={onConfirmButton} className='p-ripple' />
    </div>
  );
};

export {
  ProductFooter,
};
