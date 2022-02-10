import styled from "styled-components";

const StyleContainerFileList = styled.ul`
  width: 100%;

  li {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #4e4e4e;

    & + li {
      margin-top: 1.5rem;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    font-size: 2rem;

    span {
      font-size: 1.2rem;
      color: #999;
      margin-top: 0.5rem;

      button {
        margin-left: 0.5rem;
        border: 0;
        background: transparent;
        font-size: 1.2rem;
        color: #e57878;

        cursor: pointer;
      }
    }
  }
`;

const Preview = styled.div`
  width: 3.8rem;
  height: 5.6rem;

  margin-right: 1rem;
  border-radius: 0.5rem;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export { StyleContainerFileList, FileInfo, Preview };
