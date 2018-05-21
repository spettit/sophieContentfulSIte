import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
    position: absolute;
    top: 150px;
    z-index: -1;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flext-start;
`

const GalleriesContainer = styled.div`
    z-index: -1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    width: 70vw;
    flex-wrap: wrap;
`
const Card = styled.div`
  
  font-size: 12px;
  margin: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Label = styled.div`
  text-align: center;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
const Pic = styled.img`
  height: 200px;
`

class Gallery extends Component {
  renderImages(artworks) {
    return artworks.map((ele) => {
      return (
        <Card key={ele.sizes.src}>
          {/* <Img sizes={ele.sizes} style={{height: '300', width: (300*ele.aspectRatio)}}/> */}
          <Pic src={ele.sizes.src} />
            <Label>{ele.title}</Label>

        </Card>)
    })
  }

  render() {
    const {galleryName} = this.props.data.contentfulGallery
    const {artworks} = this.props.data.contentfulGallery
    return (
      <div>
        <Title>
          <h2>{galleryName}</h2>
        </Title>

        <Container>
        
          <GalleriesContainer>
          {this.renderImages(artworks)}
          </GalleriesContainer>

           

        </Container>
      </div>);
  }
}

Gallery.propTypes = {
  data: PropTypes.object.isRequired
}

export default Gallery;

export const pageQuery = graphql `
  query blogPostQuery($slug: String!){
    contentfulGallery(slug: {eq: $slug}) {
      galleryName
      slug
      artworks {
        sizes (maxHeight: 300) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
        id
        title
        file {
          url
        }
      }
    }
  }
`
