import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  background: var(--color-light);
  display: flex;

  z-index: 4444;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 7rem;
  flex-wrap: wrap;
  overflow: hidden;

  @media screen and (max-width: 630px) {
    margin: 0.2rem 3rem;
  }

  @media screen and (max-width: 400px) {
    margin: 0.1rem 0.5rem;
  }
`;

export const Title = styled.div`
  @media screen and (max-width: 961px) {
    width: 50%;
  }

  /* @media screen and (max-width: 340px) {
    font-size: 1.2rem;
  } */
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.isOpen ? "100vw" : "0")};
    height: 100vh;
    background: var(--color-light);
    transition: width 0.5s ease;
    overflow: hidden;

    a {
      color: #fff;
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700 !important;

  &:not(:first-child) {
    margin-left: 15px;
  }

  a,
  button {
    font-weight: 700;
    border: none;
    text-transform: uppercase;
    padding: 0.8rem 2rem;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    color: var(--color-dark);
    font-size: 0.8rem;
    font-style: bold;
    transition: 0.5s;

    &.active {
      background-color: var(--color-orange);
      color: var(--color-light) !important;
      border-radius: 7px;
      border: 1px solid var(--color-orange);

      &:hover {
        background: transparent;
        color: var(--color-orange) !important;
      }
    }
  }

  @media screen and (max-width: 961px) {
    &:not(:first-child) {
      margin-top: 15px;
    }
  }
`;

export const ToggleButton = styled.div`
  font-size: 35px;
  color: var(--color-dark) !important;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none !important;
  }

  @media screen and (max-width: 630px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`;

export const CloseIcon = styled.div`
  font-size: 3rem;
  color: var(--color-dark);
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  cursor: pointer;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
