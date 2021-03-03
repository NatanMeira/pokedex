import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #30475e;
  color: lightgray;
  text-align: center;

  .fa-heart {
    color: #dc3545;
    font-size: 1.8rem;
  }
`;

export const GithubLink = styled(Link)`
  color: white;

  &:hover {
    color: white;
  }
`;
