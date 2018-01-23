import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1 className="courier">Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div className="fl w-50 bg-dark-red">hello</div>
  </div>
)

export default SecondPage
