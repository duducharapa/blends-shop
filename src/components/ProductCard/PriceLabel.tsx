import maskPrice from "../../utils/maskPrice";


interface PriceLabelProps {
  price: number;
}

const PriceLabel: React.FC<PriceLabelProps> = ({ price }) => {
  return (
    <p className='text-md font-semibold'>
      <span className='text-lg mr-1'>R$</span>  
      {maskPrice(price)}
      <span className='font-light text-xs ml-1'>por unidade</span>
    </p>
  );
}

export {
  PriceLabel
};