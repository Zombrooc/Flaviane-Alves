import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

import useWindowSize from "../useWindowSize.js";

import Logo from "../../assets/images/doTerra.svg";

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
              <img src={Logo} alt="DoTerra Logo" />
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
            <ScrollLink
              activeClass="activeLink"
              to="firstBlock"
              spy={true}
              smooth={true}
              duration={800}
              onClick={menuHandler}
            >
              Ínicio
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              to="secondBlock"
              spy={true}
              smooth={true}
              duration={800}
              onClick={menuHandler}
              activeClass="activeLink"
            >
              Óleos Essenciais
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              activeClass="activeLink"
              to="mostWanted"
              spy={true}
              smooth={true}
              duration={800}
              onClick={menuHandler}
            >
              Sobre
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink
              to="firstBlock"
              spy={true}
              smooth={true}
              duration={800}
              onClick={menuHandler}
              className="active"
            >
              Cadastrar Agora
            </ScrollLink>
          </MenuItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
