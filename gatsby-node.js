const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      allDbJson {
        edges {
          node {
            blogs {
              id
            }
          }
        }
      }
    }
  `);
  data.allDbJson.edges.node.blogs.forEach((node) => {
    actions.createPage({
      path: `/blogs/${node.id}`,
      component: path.resolve('./src/pages/blog/[id].tsx'),
      context: { slug: node.id },
    });
  });
};
