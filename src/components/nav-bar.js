import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Navstrip = styled.div`
  margin-bottom: 1.45rem;
  background-color: rebeccapurple;
  opacity: .8;
`

const NavContent = styled.div`
  margin: 0px auto;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const NavButtons = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`

const Title = styled.h1`
  margin: 0px;
  color: white;
`

const Navbar = () => (
      <Navstrip>
        <NavContent>
          {/* <Title> */}
            <Link
              to="/"
              style={{textDecoration: 'none'}}
            >
              <Title>Sophie Knight RWS</Title>
            </Link>
          {/* </Title> */}
          <NavButtons>


            <Link
              exact
              to="/"
              style={{color: 'lightgray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'white'}}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{color: 'lightgray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'white'}}
            >
              About
            </Link>
            <Link
              to="/galleries"
              style={{color: 'lightgray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'white'}}
            >
              Galleries
            </Link>
            <Link
              to="/lessons"
              style={{color: 'lightgray', textDecoration: 'none', marginRight: '40px'}}
              activeStyle={{color: 'white'}}
            >
              Lessons
            </Link>
            <Link
              to="/contact"
              style={{color: 'lightgray', textDecoration: 'none'}}
              activeStyle={{color: 'white'}}
            >
              Contact
            </Link>

          </NavButtons>

        </NavContent>
      </Navstrip>
    )




export default Navbar
