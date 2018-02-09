import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 70vw;
    height: 70vh;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    @media(max-width: 400px){
      width: 90vw;
      height: 90vh;
    }
`

const AboutPage = ({data}) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)
  return(
    <Container>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[1].node.html }} />
    </Container>
  )
}


export default AboutPage

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
  }
`
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
