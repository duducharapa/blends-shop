import React from "react";
import maskPrice from "../../utils/maskPrice";

interface TotalLabelProps {
  price: number;
  quantity: number;
}

const TotalLabel: React.FC<TotalLabelProps> = ({ price, quantity }) => {
  const totalPrice = price * quantity;

  return (
    <div className="w-100 flex align-items-start">
      <p className="font-light text-color font-semibold">
        <span className="text-primary">Total: </span>
        <span className="text-lg font-bold">R$ </span>
        {maskPrice(totalPrice)}
      </p>
    </div>
  );
}

export {
  TotalLabel
};