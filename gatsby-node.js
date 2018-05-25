// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const galleryTemplate = path.resolve("src/templates/gallery.js");
    resolve(
      graphql(`
        {
          contentfulArtist {
            gallaries {
              id
              slug
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.contentfulArtist.gallaries.forEach(gallery => {
          createPage({
            path: gallery.slug,
            component: galleryTemplate,
            context: {
              slug: gallery.slug
            }
          });
        });
        return;
      })
    );
  });
};
