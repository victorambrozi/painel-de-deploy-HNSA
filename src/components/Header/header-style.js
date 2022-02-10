import styled from "styled-components";

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #f5f5f5;
  box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 0.25);

  padding: 2rem 12rem;
  font-size: 50px;

  .nav {
    ul {
      display: flex;
      align-items: center;
      gap: 3rem;

      > li {
        a {
          padding: 0.5rem 1.3rem;
          font-size: 1.6rem;
          font-weight: 500;
          color: #4e4e4e;
        }

        &:last-child {
          background: #3454cf;
          border-radius: 0.5rem;
          transition: 0.4s;

          &:hover {
            filter: brightness(1.2);
          }

          > a {
            color: #fff;
          }
        }
      }
    }
  }
`;

const StyleLogo = styled.div`
  a {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      height: 6rem;
    }

    h2 {
      width: 100%;
      max-width: 11rem;

      margin-left: 2rem;
      text-transform: uppercase;

      color: #0f0f0f;
    }
  }
`;

export { StyleHeader, StyleLogo };
