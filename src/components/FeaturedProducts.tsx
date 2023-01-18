import * as React from 'react';
import ProductItem, { UserInt } from './ProductItem';
interface Props {
  data: UserInt[];
}
const FeaturedProducts = ({ data }: Props) => {
  const slicedData = data.slice(0, 4);

  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  {slicedData.map((data) => {
                    return <ProductItem key={data.id} user={data} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
