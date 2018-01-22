import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

class BlogPost extends Component {

renderImages(artworks) {
  return artworks.map((ele) => {
    // const imagePath = "https:"+ele.resize.src
    // console.log(imagePath);
    return(
      <div className="fl w-third" key={ele.resolutions.src}>
        <article className="mw5 mw6-ns center pt4">
        <div className="aspect-ratio aspect-ratio--3x4 mb4">
          <Img resolutions={ele.resolutions} className="aspect-ratio--object cover"/>
        </div>
        </article>
      </div>

    )
  })
}



  render() {
    const { galleryName } = this.props.data.contentfulGallery
    const { artworks }= this.props.data.contentfulGallery
    // this.renderImages(artworks)
    return (
    <div>
      <div className="f1">{galleryName}</div>
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
        resolutions (width: 200) {
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
