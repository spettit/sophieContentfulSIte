import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MainImage = styled.div`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
`


const HomePage = ({data}) => {
  return(
    <MainImage>
      <img src={data.contentfulArtist.homePageImage.file.url} />
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
      }
    }
  }
`
