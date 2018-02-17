import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MainImage = styled.div`
  position: absolute;
  top:0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;


`


const HomePage = ({data}) => {
  console.log(data.contentfulArtist.homePageImage.resolutions)
  return(
    <MainImage>
      <Img sizes={data.contentfulArtist.homePageImage.sizes}/>
    </MainImage>
  )
}



export default HomePage

export const mainImageQuery = graphql`
  query mainImageQuery {
    contentfulArtist (artist: {eq: "Sophie Knight"}) {
      artist
      homePageImage {
        file {
          url
        }
        sizes (maxWidth: 1000){
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
        resolutions (height:200) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
