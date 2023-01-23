import { graphql } from 'gatsby';
import PageTitle from '../../components/PageTitle';
import RelatedProducts from '../../components/RelatedProducts';
import * as React from 'react';
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
            description: string;
          };
        };
      };
    };
  };
}
const ShopDetail = ({ data }: Props) => {
  let productPosts = data.allDbJson.edges[0].node.products.slice(0, 4);
  let singleProduct = productPosts.slice(0, 1);
  return (
    <Layout>
      <PageTitle title="Product Detail Page" />

      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            {singleProduct.map((prod) => {
              return (
                <div key={prod.id} className="col-md-6 col-lg-7 p-b-30">
                  <div className="p-r-30 p-lr-0-lg">
                    <div className="wrap-slick3 flex-sb flex-w">
                      <div className="slick3 gallery-lb">
                        <div className="item-slick3">
                          <div className="wrap-pic-w pos-relative">
                            <img src={prod.img} alt="IMG-PRODUCT" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {singleProduct.map((prod) => {
              return (
                <div key={prod.id} className="col-md-6 col-lg-5 p-b-30">
                  <div className="p-r-50 p-t-5 p-lr-0-lg">
                    <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                      {prod.title}
                    </h4>

                    <span className="mtext-106 cl2">{prod.price}</span>

                    <p className="stext-102 cl3 p-t-23">{prod.description}</p>

                    <div className="flex-w flex-m p-l-100 p-t-40 respon7"></div>
                  </div>
                </div>
              );
            })}

            <div className="bor10 m-t-50 p-t-43 p-b-40">
              <div className="tab01">
                <div className="tab-content p-t-43">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    {singleProduct.map((prod) => {
                      return (
                        <div key={prod.id} className="how-pos2 p-lr-15-md">
                          <p className="stext-102 cl6">{prod.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
            <span className="stext-107 cl6 p-lr-25">
              Free shipping - only today
            </span>
          </div>
        </div>
      </section>

      <RelatedProducts products={productPosts} />
    </Layout>
  );
};

export default ShopDetail;
export const query = graphql`
  query productDetailQuery {
    allDbJson {
      edges {
        node {
          products {
            id
            title
            price
            img
            description
          }
        }
      }
    }
  }
`;
