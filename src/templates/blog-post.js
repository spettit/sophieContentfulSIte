import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {Page, Row, Column} from 'hedron';

class BlogPost extends Component {
  renderImages(artworks) {
    return artworks.map((ele) => {
      return (
        <div className = "fl w-third" key={ele.resolutions.src}>
          <Img resolutions={ele.resolutions} />
        </div>)
    })
  }

  render() {
    const {galleryName} = this.props.data.contentfulGallery
    const {artworks} = this.props.data.contentfulGallery
    return (
      <div>
        <h2>{galleryName}</h2>
        <div>
          <div>
            {this.renderImages(artworks)}
          </div>
        </div>
      </div>);
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql `
  query blogPostQuery($slug: String!){
    contentfulGallery(slug: {eq: $slug}) {
      galleryName
      slug
      artworks {
        resolutions (width:200) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
        }
        id
        file {
          url
        }
      }
    }
  }
`
