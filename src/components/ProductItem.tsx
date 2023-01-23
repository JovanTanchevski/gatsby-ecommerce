import { Link } from 'gatsby';
import * as React from 'react';
export interface UserInt {
  id: string;
  description?: string;
  img: string;
  price: number;
  title: string;
  gender?: string;
}
interface Props {
  user: UserInt;
}
const ProductItem = ({ user }: Props) => {
  return (
    <a className="col-sm-6  col-md-4 col-lg-3  p-b-35 ">
      <div className="block2">
        <div className="block2-pic hov-img0">
          <img src={user.img} alt="IMG-PRODUCT" />

          <Link to={`/shop/${user.id}`}>
            <div className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
              View Details
            </div>
          </Link>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14 ">
          <div className="block2-txt-child1 flex-col-l ">
            <div className="stext-104 cl4 hov-cl1  p-b-6 ">
              <p className="m-0 p-0"> {user.title}</p>
            </div>

            <span className="stext-105 cl3">{user.price}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductItem;
