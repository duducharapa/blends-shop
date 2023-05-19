import { Image } from "primereact/image";

import image from "../../assets/coffee.svg";

function Header() {
  return (
    <header className="h-10rem flex align-items-center justify-content-center shadow-3 bg-primary">
      <div className="flex align-items-center">
        <Image src={image} width="48" />
        <h1 className="ml-3 text-6xl" style={{ fontFamily: "'Satisfy', cursive" }}>Blend's Shop</h1>
      </div>
    </header>
  );
}

export default Header;