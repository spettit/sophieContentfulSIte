import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import NavBar from '../components/nav-bar';

const ContentContainer = styled.div`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 400px) {
    width: 100vw;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Sophie Knight"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <NavBar />
    <ContentContainer>
      {children()}
    </ContentContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
