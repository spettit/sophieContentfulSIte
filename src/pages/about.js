import React from 'react'

const AboutPage = ({data}) => {
  // console.log(data.contentfulArtist.biography.biography)
  return(
    <div>
      <h1>About Me</h1>
      <div>{data.contentfulArtist.biography.biography}</div>
    </div>
  )
}


export default AboutPage

export const biogQuery = graphql`
  query biogQuery {
    contentfulArtist (artist: {eq: "Sophie Knight"}) {
    biography {
      biography
    }
  }
  }
`
