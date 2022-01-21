import styled from "styled-components";

const StyleHeader = styled.header`
  padding: 2rem;
  font-size: 50px;

  position: absolute;
  top: 2rem;
  right: 2rem;

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
          background: #3454CF;
          border-radius: .5rem;
          transition: .4s;

          &:hover {
              filter: brightness(1.2);
          }

          > a {
              color: #FFF;
          }
        }
      }
    }
  }
`;

export { StyleHeader };
