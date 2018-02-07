import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug} style={{textDecoration: 'none', color: 'black'}}>{node.galleryName}</Link>
    </li>
  )
}


const GalleriesPage = ({data}) => (
  <div>
    <ul>
      {data.contentfulArtist.gallaries.map((gallaries) => <BlogPost node ={gallaries} key={gallaries.id}/>)}
    </ul>
  </div>
)

export default GalleriesPage

export const galleryQuery = graphql`
  query galleryQuery {
    contentfulArtist (artist: {eq: "Sophie Knight"}) {
    gallaries {
      id
      galleryName
      slug
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
