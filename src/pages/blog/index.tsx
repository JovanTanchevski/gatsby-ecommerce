import { graphql } from 'gatsby';
import BlogItem from '../../components/BlogItem';
import PageTitle from '../../components/PageTitle';
import * as React from 'react';
import Layout from '../../components/Layout';
interface Props {
  data: {
    allDbJson: {
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
const Blog = ({ data }: Props) => {
  let blogData = data.allDbJson.edges[0].node.blogs;

  return (
    <Layout>
      <PageTitle title="Blogs" />

      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg items-content">
                {blogData && blogData.length > 0 ? (
                  blogData.map((blog) => {
                    return <BlogItem key={blog.id} blog={blog} />;
                  })
                ) : (
                  <p>There are no results with your search.</p>
                )}
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <form className="bor17 of-hidden pos-relative">
                  <input
                    className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />

                  <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                    <i className="zmdi zmdi-search"></i>
                  </button>
                </form>

                <div className="p-t-55">
                  <h4 className="mtext-112 cl2 p-b-33">Categories</h4>

                  <ul>
                    <li className="bor18">
                      <button className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                        Fashion
                      </button>
                    </li>

                    <li className="bor18">
                      <button className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                        Beauty
                      </button>
                    </li>

                    <li className="bor18">
                      <button className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                        Street Style
                      </button>
                    </li>

                    <li className="bor18">
                      <button className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                        Life Style
                      </button>
                    </li>

                    <li className="bor18">
                      <button className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                        DIY & Crafts
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
export const query = graphql`
  query BlogIndexQuery {
    allDbJson {
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
