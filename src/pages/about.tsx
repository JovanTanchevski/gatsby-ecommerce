import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import * as React from 'react';
import Layout from '../components/Layout';
interface Props {
  data: {
    allDbJson: {
      edges: {
        node: {
          about_page: {
            author: string;
            fifth_content: string;
            first_content: string;
            first_image: string;
            fourth_content: string;
            second_content: string;
            second_image: string;
            second_title: string;
            third_content: string;
            title;
          };
        };
      };
    };
  };
}
const About = ({ data }: Props) => {
  const {
    title,
    author,
    fifth_content,
    first_image,
    fourth_content,
    second_content,
    second_image,
    second_title,
    third_content,
  } = data.allDbJson.edges[0].node.about_page;

  return (
    <Layout>
      <PageTitle title="About" />

      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">{title}</h3>

                <p className="stext-113 cl6 p-b-26">{fifth_content}</p>

                <p className="stext-113 cl6 p-b-26">{second_content}</p>

                <p className="stext-113 cl6 p-b-26">{third_content}</p>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1 ">
                <div className="hov-img0">
                  <img src={first_image} alt="IMG" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">{second_title}</h3>

                <p className="stext-113 cl6 p-b-26">{fourth_content}</p>

                <div className="bor16 p-l-29 p-b-9 m-t-22">
                  <p className="stext-114 cl6 p-r-40 p-b-11">{fifth_content}</p>

                  <span className="stext-111 cl8">{author}</span>
                </div>
              </div>
            </div>

            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img src={first_image} alt="IMG" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
export const query = graphql`
  query aboutQuery {
    allDbJson {
      edges {
        node {
          about_page {
            author
            fifth_content
            first_content
            first_image
            fourth_content
            second_content
            second_image
            second_title
            third_content
            title
          }
        }
      }
    }
  }
`;
