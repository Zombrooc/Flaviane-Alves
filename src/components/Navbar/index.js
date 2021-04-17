import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";

import useWindowSize from "../useWindowSize.js";

import Logo from '../../assets/images/doTerra.svg';

import {
  Nav,
  Container,
  Title,
  Menu,
  MenuItem,
  ToggleButton,
  CloseIcon,
} from "./styles";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);

  const size = useWindowSize();

  const menuHandler = () => {
    setMenuStatus(!menuStatus);
  };

  useEffect(() => {
    if (size.width >= 960) {
      setMenuStatus(false);
    }
  }, [size.width]);

  return (
    <Nav>
      <Container>
        <Title>
          <Link href="/">
            <a>
              <img src={Logo} alt="DoTerra Logo"/>
            </a>
          </Link>
        </Title>
        <ToggleButton onClick={menuHandler}>
          {!menuStatus && <MdMenu />}
        </ToggleButton>
        <Menu isOpen={menuStatus}>
          <CloseIcon isOpen={menuStatus} onClick={menuHandler}>
            <MdClose />
          </CloseIcon>
          <MenuItem>
            <Link href="/">
              <a>Ínicio</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a>Óleos Essenciais</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a>Sobre</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a className="active">Cadastrar Agora</a>
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
