import React from 'react'
import Img from 'gatsby-image'

const HomePage = ({data}) => {
  return(
    <div>
      <img src={data.contentfulArtist.homePageImage.file.url} />
    </div>
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
