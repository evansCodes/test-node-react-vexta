import styled from "styled-components";

export const Item = styled.div`
  width: 100%;

  & + div {
    margin-top: 2px;
  }

  ul {
    background: #fff;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    transition: 0.3s ease-out;

    @media (max-width: 420px) {
      padding: 15px 10px;
    }

    &:hover {
      background: #f0f1fa;
    }

    li {
      width: 200px;
      display: flex;
      justify-content: space-between;

      &:nth-child(4) {
        width: 60px;
      }

      @media (max-width: 600px) {
        width: 60px;
      }

      a {
        font-size: 18px;
        text-decoration: none;
        color: #cbcbcb;

        &:hover {
          color: #333;
        }
      }

      button {
        border: 0;
        background: transparent;
        list-style: none;
        color: #cbcbcb;
        font-size: 18px;
        cursor: pointer;

        &:hover {
          color: #333;
        }
      }
    }
  }
`;
