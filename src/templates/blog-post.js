import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {

renderImages(artworks) {
  return artworks.map((ele) => {
    const imagePath = "https:"+ele.file.url
    console.log(imagePath);
    return(
      <img src={imagePath} key={imagePath} />
    )
  })
}



  render() {
    const { galleryName } = this.props.data.contentfulGallery
    const { artworks }= this.props.data.contentfulGallery
    // this.renderImages(artworks)
    return (
    <div>
      <h1>{galleryName}</h1>
      <div>
        {this.renderImages(artworks)}
      </div>

    </div>
    );
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulGallery(slug: {eq: $slug}) {
      galleryName
      slug
      artworks {
        id
        file {
          url
        }
      }
    }
  }
`
