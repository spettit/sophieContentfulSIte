import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import Link from "gatsby-link";

const Container = styled.div`
  position: absolute;
  top: 150px;
  z-index: -1;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flext-start;
`;

const GalleriesContainer = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 70vw;
  flex-wrap: wrap;
`;
const Card = styled.div`
  font-size: 12px;
  margin: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Label = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Pic = styled.img`
  height: 200px;
`;

const Modal = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100000;
  display: flex;
`;

const ModalImg = styled.img`
 width: 100%;
 height: auto;
`

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      pickedWork: ""
    };
  }

  handleClick = pic => {
    console.log(pic);
    this.setState({ pickedWork: pic });
  };
  renderImages(works) {
    return works.map(ele => {
      return (
        <Card
          key={ele.image.sizes.src}
          onClick={() => this.handleClick(ele.image.file.url)}
        >
          {/* <Img sizes={ele.sizes} style={{height: '300', width: (300*ele.aspectRatio)}}/> */}
          <Pic src={ele.image.sizes.src} />
          <Label>{ele.title}</Label>
          <Label>{ele.medium}</Label>
          <Label>
            {ele.width}cm {ele.height}cm
          </Label>
        </Card>
      );
    });
  }

  render() {
    const { galleryName } = this.props.data.contentfulGallery;
    const { works } = this.props.data.contentfulGallery;
    return (
      <div>
        <Title>
          <h2>{galleryName}</h2>
        </Title>

        <Container>
          <GalleriesContainer>{this.renderImages(works)}</GalleriesContainer>
        </Container>
        <Modal
          style={{ 
            display: this.state.pickedWork === "" ? "none" : "flex",
            backgroundImage: `url(${this.state.pickedWork})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          
          }}
          onClick={() => this.setState({ pickedWork: "" })}
        >

          {/* <ModalImg src={this.state.pickedWork} /> */}

          
        </Modal>
      </div>
    );
  }
}

Gallery.propTypes = {
  data: PropTypes.object.isRequired
};

export default Gallery;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      galleryName
      slug
      works {
        image {
          sizes(maxHeight: 300) {
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
        title
        medium
        width
        height
      }
    }
  }
`;
