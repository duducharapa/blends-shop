
const maskPrice = (price: number) => {
  return price.toFixed(2).toString().replace('.', ',');
}

export default maskPrice;