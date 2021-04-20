import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Block = styled.div`
  /* height: 100%; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding: 0 80px;

  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px){
    padding: 0 15px;
  }

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

  &#firstBlock {
    /* min-height: 116%; */
    min-height: 124%;
    /* padding: 0 %; */
    position: relative;
    @media screen and (max-width: 768px) {
      padding-bottom: 50px;
      padding-top: 80px;
    }

    div:nth-child(1) {
      color: var(--color-light);

      p.orangeLine {
        border: 8px solid #ff8000;
        margin: 10px 0px;
        width: 40%;
        background: #ff8000;
        align-self: flex-start !important;
      }

      h1 {
        text-shadow: 0px 0px 20px rgb(255 255 255 / 90%);
        align-self: flex-start !important;

        b#firstBlock {
          font-size: 50px;
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

  
`;
