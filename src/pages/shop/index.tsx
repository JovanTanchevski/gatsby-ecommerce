import { graphql } from 'gatsby';
import * as React from 'react';
import ProductItem from '../../components/ProductItem';
import Layout from '../../components/Layout';
interface Props {
  data: {
    allDbJson: {
      edges: {
        node: {
          products: {
            id: string;
            title: string;
            price: string;
            img: string;
          };
        };
      };
    };
  };
}
const Shop = ({ data }: Props) => {
  const productData = data.allDbJson.edges[0].node.products;
  return (
    <Layout>
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                data-filter="*"
              >
                All Products
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".women"
              >
                Women
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".men"
              >
                Men
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".bag"
              >
                Belt
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".shoes"
              >
                Shoes
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".watches"
              >
                Watches
              </button>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                Search
              </div>
            </div>

            {/* search */}
            <div className="panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div className="row items-content">
            {productData.map((data) => {
              return <ProductItem key={data.id} user={data} />;
            })}
          </div>

          <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
            <a
              href="#"
              className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
            >
              1
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              2
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              3
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
export const query = graphql`
  query MyQuery {
    allDbJson {
      edges {
        node {
          products {
            id
            title
            price
            img
          }
        }
      }
    }
  }
`;
