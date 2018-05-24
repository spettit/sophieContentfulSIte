import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  width: 70vw;
  height: 70vh;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 400px) {
    width: 90vw;
    height: 90vh;
  }
`;

const AboutPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)

  return (
    <Container>
      <Img
        className="profilePic"
        sizes={data.contentfulArtist.profilePicture.sizes}
        style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[1].node.html
        }}
      />
    </Container>
  );
};

export default AboutPage;

export const biogQuery = graphql`
  query biogQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
        }
      }
    }
    contentfulArtist {
      id
      artist
      profilePicture {
        id
        file {
          url
        }
        sizes(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`;
//  WITH REGEX
//   allMarkdownRemark (filter: { id: {regex: "/biog/"} } ) {
// 			edges {
//         node {
//           id
//           html
//         }
//       }
//   }
//
