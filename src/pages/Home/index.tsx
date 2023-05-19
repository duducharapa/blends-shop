import { Layout } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import itemsData from "../../data/items";

const Home: React.FC = () => (
  <Layout>
    <div className='my-5 flex flex-column'>
      <div className='px-3 mb-5'>
        <h1 className="text-2xl" style={{ color: '#7C4527' }}>Confira nossos produtos</h1>
      </div>
      
      <div className='grid grid-nogutter px-3 gap-3 justify-content-center'>
        {
          itemsData.map(item => (
            <div className='col-12 md:col-5 lg:col-3' key={item.id}>
              <ProductCard product={item} />
            </div>
          ))
        }
      </div>
    </div>
  </Layout>
);

  export {
  Home
};