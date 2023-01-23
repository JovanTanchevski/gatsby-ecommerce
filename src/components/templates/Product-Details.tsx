import { graphql } from 'gatsby';
import PageTitle from '../../components/PageTitle';
import RelatedProducts from '../../components/RelatedProducts';
import * as React from 'react';
import Layout from '../../components/Layout';
interface Props {
  data: {
    markdownRemark: {
      html;
      frontmatter: {
        stack: string;
        title: string;
        featuredImg: {
          childImageSharp: {
            fluid: {
              src: string;
            };
          };
        };
      };
    };
  };
}

const ProductDetailPage = ({ data }: Props) => {
  let singleProductImg =
    data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid;
  const { stack, title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <PageTitle title="Product Detail Page" />
    </Layout>
  );
};

export default ProductDetailPage;
export const query = graphql`
  query ProjectDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
