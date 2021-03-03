import { shade } from 'polished';
import { css } from 'styled-components';

export const pokemonTypeVariants = {
  default: css`
    background: gray;
    border-color: black;
    color: #fff;

    .pokemon {
      background: gray;
      border-color: black;
    }
  `,
  electric: css`
    background: #ffff99;
    border-color: #f19800;
    color: #131313;

    .pokemon {
      background: #ffff99;
      border-color: #f19800;
    }
  `,
  bug: css`
    background: #729f3f;
    border-color: ${shade(0.4, '#729f3f')};
    color: #131313;

    .pokemon {
      background: #729f3f;
      border-color: ${shade(0.4, '#729f3f')};
    }
  `,
  dark: css`
    background: #707070;
    border-color: ${shade(0.4, '#707070')};
    color: #131313;

    .pokemon {
      background: #707070;
      border-color: ${shade(0.4, '#707070')};
    }
  `,
  dragon: css`
    background: linear-gradient(135deg, #53a4cf 50%, #f16e57 50%);
    border-color: ${shade(0.4, '#53a4cf')};
    color: #131313;

    .pokemon-type {
      background: linear-gradient(135deg, #53a4cf 50%, #f16e57 50%);
    }
    .pokemon {
      background: linear-gradient(135deg, #53a4cf 50%, #f16e57 50%);
      border-color: ${shade(0.4, '#53a4cf')};
    }
  `,
  fairy: css`
    background: #fdb9e9;
    border-color: ${shade(0.4, '#fdb9e9')};
    color: #131313;

    .pokemon {
      background: #fdb9e9;
      border-color: ${shade(0.4, '#fdb9e9')};
    }
  `,
  fighting: css`
    background: #d56723;
    border-color: ${shade(0.4, '#d56723')};
    color: #131313;

    .pokemon {
      background: #d56723;
      border-color: ${shade(0.4, '#d56723')};
    }
  `,
  fire: css`
    background: #fd7d24;
    border-color: ${shade(0.3, '#fd7d24')};
    color: #131313;

    .pokemon {
      background: #fd7d24;
      border-color: ${shade(0.3, '#fd7d24')};
    }
  `,
  flying: css`
    background: linear-gradient(135deg, #3dc7ef 50%, #bdb9b8 50%);
    border-color: ${shade(0.4, '#3dc7ef')};
    color: #131313;

    .pokemon {
      background: linear-gradient(135deg, #3dc7ef 50%, #bdb9b8 50%);
      border-color: ${shade(0.4, '#3dc7ef')};
    }
  `,
  ghost: css`
    background: #7b62a3;
    border-color: ${shade(0.4, '#7b62a3')};
    color: #131313;

    .pokemon {
      background: #7b62a3;
      border-color: ${shade(0.4, '#7b62a3')};
    }
  `,
  grass: css`
    border-color: ${shade(0.4, '#9bcc50')};
    color: #131313;

    .pokemon {
      border-color: ${shade(0.4, '#9bcc50')};
      background: #9bcc50;
    }
  `,
  ground: css`
    background: linear-gradient(135deg, #f7de3f 50%, #ab9842 50%);
    border-color: ${shade(0.4, '#f7de3f')};
    color: #131313;

    .pokemon {
      background: linear-gradient(135deg, #f7de3f 50%, #ab9842 50%);
      border-color: ${shade(0.4, '#f7de3f')};
    }
  `,
  ice: css`
    background: #51c4e7;
    border-color: ${shade(0.4, '#51c4e7')};
    color: #131313;

    .pokemon {
      background: #51c4e7;
      border-color: ${shade(0.4, '#51c4e7')};
    }
  `,
  normal: css`
    background: #a4acaf;
    border-color: ${shade(0.4, '#a4acaf')};
    color: #131313;

    .pokemon {
      background: #a4acaf;
      border-color: ${shade(0.4, '#a4acaf')};
    }
  `,
  poison: css`
    background: #b97fc9;
    border-color: ${shade(0.4, '#b97fc9')};
    color: #131313;

    .pokemon {
      background: #b97fc9;
      border-color: ${shade(0.4, '#b97fc9')};
    }
  `,
  psychic: css`
    background: #f366b9;
    border-color: ${shade(0.4, '#f366b9')};
    color: #131313;

    .pokemon {
      background: #f366b9;
      border-color: ${shade(0.4, '#f366b9')};
    }
  `,
  rock: css`
    background: #a38c21;
    border-color: ${shade(0.4, '#a38c21')};
    color: #131313;

    .pokemon {
      background: #a38c21;
      border-color: ${shade(0.4, '#a38c21')};
    }
  `,
  steel: css`
    background: #9eb7b8;
    border-color: ${shade(0.4, '#9eb7b8')};
    color: #131313;

    .pokemon {
      background: #9eb7b8;
      border-color: ${shade(0.4, '#9eb7b8')};
    }
  `,
  water: css`
    background: #4592c4;
    border-color: ${shade(0.4, '#4592c4')};
    color: #131313;

    .pokemon {
      background: #4592c4;
      border-color: ${shade(0.4, '#4592c4')};
    }
  `,
};
