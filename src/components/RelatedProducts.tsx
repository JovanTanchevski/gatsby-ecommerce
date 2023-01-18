import * as React from 'react';
import ProductItem, { UserInt } from './ProductItem';
interface Props {
  products: UserInt[];
}
const RelatedProducts = ({ products }: Props) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {products.map((prod) => {
              return <ProductItem user={prod} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
