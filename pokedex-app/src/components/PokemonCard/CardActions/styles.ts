import styled from 'styled-components';

export const Actions = styled.div`
  background: #b5b5b5;
  border-radius: 0 0 0.5rem 0.5rem;

  .btn {
    transition: background-color 0.5s;
  }
  .btn-show {
    border-radius: 0 0 0 0.5rem;
  }
  .btn-show:hover {
    background-color: #0d6efd;
    color: white;
  }
  .btn-edit:hover {
    background-color: #ffc107;
    color: white;
  }
  .btn-delete {
    border-radius: 0 0 0.5rem 0;
  }
  .btn-delete:hover {
    background-color: #dc3545;
    color: white;
  }
`;
