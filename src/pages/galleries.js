import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    padding-bottom: 80px;
    padding-top: 20vh;
    display: flex;
    flex-direction: row;
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
  margin-right: 0px;
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
  font-size: 20px;
`

const Gallery = ({node}) => {
  return (
    <Card>
      <Link to={node.slug} style={{textDecoration: 'none', color: 'black'}}>
        <Img resolutions={node.coverImage.resolutions} />
        </Link>
        <Title>
          {node.galleryName}
        </Title>
    </Card>
  )
}


const GalleriesPage = ({data}) => (
  <Container>

      {data.contentfulArtist.gallaries.map((gallaries) => <Gallery node ={gallaries} key={gallaries.id}/>)}

  </Container>
)

export default GalleriesPage

export const galleryQuery = graphql`
  query galleryQuery {
    contentfulArtist (artist: {eq: "Sophie Knight"}) {
    gallaries {
      id
      galleryName
      slug
      coverImage {
        resolutions (width:200) {
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
}
`

// export const galleryQuery = graphql`
//   query galleryQuery {
//     allContentfulGallery (filter: {
//       node_locale: {eq: "en-GB"}
//     }) {
//       edges {
//         node {
//           id
//           galleryName
//           slug
//         }
//       }
//     }
//   }
// `
