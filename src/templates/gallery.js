import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`

  ${'' /* background-color: lightgray; */}
  width: 100vw;
  padding-bottom: 80px;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  ${'' /* justify-content: space-around; */}
  overflow: scroll;
`

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
  padding-right: 30px;
`

const Label = styled.div`
  text-align: center;
`

const Title = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

class Gallery extends Component {
  renderImages(artworks) {
    return artworks.map((ele) => {
      return (
        <Card key={ele.resolutions.src}>
          <Img resolutions={ele.resolutions} />
          <Link to={'/'}>
            <Label>{ele.title}</Label>
          </Link>

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

            {this.renderImages(artworks)}

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
        resolutions (width:200) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
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
