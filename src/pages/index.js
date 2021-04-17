import React from "react";
import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/Navbar";

import FirstBlockBG from "../assets/images/doterranovo_bg1.jpg";

import { Container, Block } from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>döTerra - Flaviane Alves</title>
      </Head>
      <Navbar />
      <Block style={{ backgroundImage: `url(${FirstBlockBG})` }}>
        <div>
          <p className="orangeLine"></p>
          <h1>
            <b id="titulo1"> Sua Nova Vida Começa Agora!</b>
          </h1>
        </div>
        <div> text </div>
      </Block>
    </Container>
  );
}
