import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug} style={{textDecoration: 'none', color: 'black'}}>{node.galleryName}</Link>
    </li>
  )
}


const IndexPage = ({data}) => (
  <div>
    <ul>
      {data.allContentfulGallery.edges.map((edge) => <BlogPost node ={edge.node} key={edge.node.id}/>)}
    </ul>
    <Link to="page-2">Page Two</Link>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulGallery (filter: {
      node_locale: {eq: "en-GB"}
    }) {
      edges {
        node {
          id
          galleryName
          slug
        }
      }
    }
  }
`
