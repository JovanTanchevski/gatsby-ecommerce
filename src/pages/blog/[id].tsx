import PageTitle from '../../components/PageTitle';
import RelatedBlogs from '../../components/RelatedBlogs';
import * as React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
interface Props {
  data: {
    allDbJson: {
      edges: {
        node: {
          blogs: {
            id: string;
            img: string;
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
const BlogDetail = ({ data }: Props) => {
  let blogPosts = data.allDbJson.edges[0].node.blogs.slice(0, 4);
  let singleBlogPost = blogPosts.slice(0, 1);

  return (
    <Layout>
      <PageTitle title="Blog Detail" />

      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            {singleBlogPost.map((blog) => {
              return (
                <div className="col-md-8 col-lg-9 p-b-80">
                  <div className="p-r-45 p-r-0-lg">
                    <div className="wrap-pic-w how-pos5-parent">
                      <img src={blog.img} alt="IMG-BLOG" />
                    </div>

                    <div className="p-t-32">
                      <span className="flex-w align-items-center flex-m stext-111 cl2 p-b-19">
                        <span className="flex-c-m mr-3 bor7 p-lr-15 trans-04">
                          {blog.category}
                        </span>

                        <span>
                          <span className="cl4">By</span> {blog.author}
                          <span className="cl12 m-l-4 m-r-6">|</span>
                        </span>

                        <span>{blog.date}</span>
                      </span>

                      <h4 className="ltext-109 cl2 p-b-28">{blog.title}</h4>

                      <p className="stext-117 cl6 p-b-26">
                        {blog.first_content}
                      </p>

                      <p className="stext-117 cl6 p-b-26">
                        {blog.second_content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <RelatedBlogs blogs={blogPosts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
// export const query = graphql`
//   query BlogTitle {
//     dbJson(
//       blogs: {
//         elemMatch: { id: { eq: "45348cb0-c4e9-40a7-888f-24541aba6192" } }
//       }
//     ) {
//       blogs {
//         id
//       }
//     }
//   }
// `;
export const query = graphql`
  query MyQuery {
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
