import React from 'react';

import { FooterContainer, GithubLink } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer className="p-3">
        <p>
          Made with <i className="fas fa-heart" /> by
          <GithubLink to="https://github.com/NatanMeira" className="ms-2">
            Natan Meira
          </GithubLink>
        </p>
      </FooterContainer>
    </>
  );
};

export default Footer;
