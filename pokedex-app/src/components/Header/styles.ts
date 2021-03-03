import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #f05454;

  @media (max-width: 770px) {
    .col-sm-12 + .col-sm-12 {
      margin-top: 1rem;
    }
  }

  .btn-add {
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
`;
