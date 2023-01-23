import * as React from 'react';
import Banner from '../components/Banner';
import CategoryPicker from '../components/CategoryPicker';
import FeaturedBlogs from '../components/FeaturedBlogs';
import FeaturedProducts from '../components/FeaturedProducts';
import '../styles/main.css';
import '../styles/util.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
interface Props {
  data: {
    allDbJson: {
      edges: {
        node: {
          banner_content: {
            preTitle: string;
            title: string;
          };
        };
      };
    };
    products: {
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
    blogs: {
      edges: {
        node: {
          blogs: {
            id: string;
            img: string;
            excerpt: string;
            category: string;
            author: string;
            title: string;
            date: string;
          };
        };
      };
    };
  };
}
const Home = ({ data }: Props) => {
  const { preTitle, title } = data.allDbJson.edges[0].node.banner_content;
  let featuredBlogData = data.blogs.edges[0].node.blogs.slice(0, 4);

  return (
    <Layout>
      <Banner title={title} description={preTitle} />
      <CategoryPicker />
      <FeaturedProducts data={data.products.edges[0].node.products} />
      <FeaturedBlogs blogs={featuredBlogData} />
    </Layout>
  );
};

export default Home;
export const query = graphql`
  query indexQuery {
    allDbJson {
      edges {
        node {
          banner_content {
            preTitle
            title
          }
        }
      }
    }
    products: allDbJson {
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
    blogs: allDbJson {
      edges {
        node {
          blogs {
            id
            img
            excerpt
            category
            author
            title
            date
          }
        }
      }
    }
  }
`;
