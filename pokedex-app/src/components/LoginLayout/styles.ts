import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const LoginCard = styled.div`
  -webkit-box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.75);

  margin-top: 8rem;
  padding: 10rem 3rem 3rem 3rem;
  h1 {
    text-align: center;
    margin: 1rem 0;
  }

  header {
    position: relative;
  }
`;

export const LoginLayoutContainer = styled.div`
  background-color: #e8e8e8;
`;

export const ImgBackground = styled.div`
  background: var(--red);
  border-radius: 50%;
  padding: 1rem;
  position: absolute;
  top: -220px;
`;

export const SigninButton = styled(Button)`
  background-color: var(--blue);
  border: 0;
  padding: 0.8rem;
  margin-top: 0.25rem;
`;
