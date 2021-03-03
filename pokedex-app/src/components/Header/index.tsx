import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { HeaderContainer, Logo } from './styles';

import logoImg from '../../assets/pokedex.webp';

const Header: React.FC = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <Logo className="mt-3">
                <img src={logoImg} alt="Pokedex Logo" width="35%" />
              </Logo>
              <div className="m-3 p-3">{children}</div>
            </Col>
          </Row>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
