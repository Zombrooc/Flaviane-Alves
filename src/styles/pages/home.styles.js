import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Block = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  display: flex;
  flex-wrap: wrap;

  div {
    flex: 50%;

    @media screen and (max-width: 720px) {
      flex: 100%;
    }
  }

  /* &:first-child {
    div:nth-child(1) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 150px;

      p.orangeLine {
        border: 8px solid #ff8000;
        margin: 10px 0px;
        width: 40%;
        background: #ff8000;
      }

      h1 {
        text-shadow: 0px 0px 20px rgb(255 255 255 / 90%);

        b #titulo1 {
          font-size: 50px;
          line-height: 55px;
        }
      }

      
    }
  } */
`;
