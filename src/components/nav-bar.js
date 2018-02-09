import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Navstrip = styled.div`
  margin-bottom: 1.45rem;
  background-color: rebeccapurple;
  opacity: .8;
  @media(max-width: 400px) {
    margin-bottom: 0px;
  }
`

const NavContent = styled.div`
  margin: 0px auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`

const NavButtons = styled.div`

`

const Title = styled.h1`
  margin: 0px;
  color: white;
  @media(max-width: 400px) {
    font-size: 2rem;
  }
`

const LinkContainer=styled.div`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  @media(max-Width: 850px) {
    margin-left: 3px;
    margin-right: 3px;
  }
`

const Navbar = () => (
      <Navstrip>
        <NavContent>
            <Link
              to="/"
              style={{textDecoration: 'none'}}
            >
              <Title>Sophie Knight RWS</Title>
            </Link>
          <NavButtons>

            <LinkContainer>
              <Link
                exact
                to="/"
                style={{textDecoration: 'none', color: 'lightgray'}}
                activeStyle={{color: 'white'}}
              >
                Home
              </Link>
            </LinkContainer>
            <LinkContainer>
            <Link
              to="/about"
              style={{textDecoration: 'none', color: 'lightgray'}}
              activeStyle={{color: 'white'}}
            >
              About
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link
              to="/galleries"
              style={{textDecoration: 'none', color: 'lightgray'}}
              activeStyle={{color: 'white'}}
            >
              Galleries
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link
              to="/lessons"
              style={{textDecoration: 'none', color: 'lightgray'}}
              activeStyle={{color: 'white'}}
            >
              Lessons
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Link
              to="/contact"
              style={{textDecoration: 'none', color: 'lightgray'}}
              activeStyle={{color: 'white'}}
            >
              Contact
            </Link>
          </LinkContainer>


          </NavButtons>

        </NavContent>
      </Navstrip>
    )




export default Navbar
