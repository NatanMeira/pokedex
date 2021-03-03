import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoginCard, LoginLayoutContainer, ImgBackground } from './styles';

import pokeballImg from '../../assets/pokeball-icon.jpg';

interface LoginLayoutProps {
  title: string;
}
const LoginLayout: React.FC<LoginLayoutProps> = ({ title, children }) => {
  return (
    <>
      <LoginLayoutContainer className="vh-100">
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={6} className="pt-5">
              <LoginCard className="d-flex justify-content-center align-itens-center flex-column mb-5">
                <header>
                  <div className="logo d-flex justify-content-center">
                    <ImgBackground>
                      <img
                        src={pokeballImg}
                        alt="Pokeball"
                        width="200px"
                        height="200px"
                      />
                    </ImgBackground>
                  </div>

                  <h1>{title}</h1>
                </header>
                {children}
              </LoginCard>
            </Col>
          </Row>
        </Container>
      </LoginLayoutContainer>
    </>
  );
};

export default LoginLayout;
