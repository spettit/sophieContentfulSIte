import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`

const ExhibitionPage = ({data}) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)
  return(
    <Container>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    </Container>
  )
}


export default ExhibitionPage

export const exhibitionQuery = graphql`
  query exhibitionQuery {
    allMarkdownRemark (filter: { id: {regex: "/exhibitions/"} } ) {
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
