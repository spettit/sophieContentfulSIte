import React from 'react'

const AboutPage = ({data}) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)
  return(
    <div>
      <h1>About Sophie</h1>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
      <h1>Sophie says</h1>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[1].node.html }} />
    </div>
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
