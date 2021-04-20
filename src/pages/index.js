import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaAngleDoubleRight } from 'react-icons/fa';

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
      <Block
        style={{ backgroundImage: `url(${FirstBlockBG})` }}
        id="firstBlock"
      >
        <div>
          <p className="orangeLine"></p>
          <h1>
            <b id="firstBlock"> Sua Nova Vida Começa Agora!</b>
          </h1>
          <p>
            Conquiste uma Vida Mais Saudável e Tenha um Negócio Próprio com a{" "}
            <strong>doTERRA</strong>! Faça seu Cadastro Agora e Saiba Mais!
          </p>
          <FaAngleDoubleRight/>
        </div>
        <div>
          <div className="centerBox">
            aaa
          </div>
        </div>
      </Block>
    </Container>
  );
}
