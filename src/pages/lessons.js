import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
`

const LessonPage = ({data}) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)
  return(
    <Container>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
      <Link to='/contact'>Sign up for Watercolour Lessons</Link>
    </Container>
  )
}


export default LessonPage

export const lessonQuery = graphql`
  query lessonQuery {
    allMarkdownRemark (filter: { id: {regex: "/lesson/"} } ) {
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
