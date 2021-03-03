import { Button } from 'react-bootstrap';

import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;

  .form-control {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
`;

export const SearchButton = styled(Button)`
  background-color: #30475e;
  color: white;

  &:hover {
    background-color: #0561bd;
  }
`;
