import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Block = styled.div`
  /* height: 100%; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding: 0 80px;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }

  &#firstBlock {
    min-width: 100%;
    min-height: 124%;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    & > div {
      flex: 50%;
      /* padding: 20px; */

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 768px) {
        flex: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      padding-bottom: 50px;
      padding-top: 80px;
    }

    div:nth-child(1) {
      color: var(--color-light);

      p.orangeLine {
        border: 8px solid var(--color-orange);
        margin: 10px 0px;
        width: 40%;
        background: var(--color-orange);
        align-self: flex-start !important;
      }

      h1 {
        text-shadow: 0px 0px 20px rgb(255 255 255 / 90%);
        align-self: flex-start !important;

        .firstBlock {
          font-size: 45px;
          line-height: 55px;
        }
      }

      p {
        line-height: 1.8;
        font-size: 20px;
      }

      svg {
        color: var(--color-orange);
        font-size: 70px;
        align-self: flex-start;
      }
    }

    div:nth-child(2) {
      flex-direction: column;
      justify-content: space-around !important;

      .centerBox {
        max-width: 750px;
        width: 100%;
        /* max-height: 80%; */
        background: var(--color-light);
        color: var(--color-dark);
        padding: 35px 30px 30px 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 50%);
      }

      @media screen and (max-width: 768px) {
        padding-top: 70px;
      }
    }

    .blockDivision {
      padding: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  &#secondBlock {
    display: flex;
    align-items: center;
    padding-left: 150px;
    padding-right: 150px;

    img {
      width: 360px;
    }

    h2 {
      font-size: 70px;
      font-weight: 700;
      color: #354657;
      line-height: 1.1;
      /* margin-top: 150px;
      margin-bottom: 20px; */
    }

    p {
      font-size: 20px;
      margin: 0 0 15px;
      line-height: 1.72222;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      margin-top: 90px;
      margin-bottom: 20px;
      padding-left: 30px;
      padding-right: 30px;

      h2 {
        font-size: 50px;
        margin-top: 80px;
        margin-bottom: 20px;
      }

      p {
        font-size: 15px;
      }

      img {
        width: 200px;
      }
    }
  }
`;
