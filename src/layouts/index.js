import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './styles.css'

import NavBar from '../components/nav-bar';


const TemplateWrapper = ({ children, data }) => (
  <div style={{position: 'relative'}}>
    <Helmet
      title="Sophie Knight"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <NavBar data = {data}/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const artistNameQuery = graphql`
  query artistNameQuery {
    contentfulArtist (name: {eq: "Sophie Knight"}) {
      name
    }
  }
`
