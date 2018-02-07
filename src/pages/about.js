import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
`

const AboutPage = ({data}) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)
  return(
    <Container>
      <h1>About Sophie</h1>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
      <h1>Sophie's method</h1>
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
