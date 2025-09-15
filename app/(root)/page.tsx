import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";

const HomePage = () => {
  return (
    <div className='space-y-8 my-5'>
      <h2 className='h2-bold font-bold text-3xl'>Áo sơ mi / Áo khoác đẹp</h2>
      <ProductList title='Các loại áo mới nhất' data={sampleData.products}/>
    </div>

  );
};
export default HomePage;