import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import Navbar from "../components/Navbar";

import FirstBlockBG from "../assets/images/doterranovo_bg1.jpg";
import blockDiv from "../assets/images/blockDiv.png";
import doTerraOleo from "../assets/images/doterranovo_oleo1.jpg";

import { Container, Block } from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>dōTerra - Flaviane Alves</title>
      </Head>
      <Navbar />
      <Block
        style={{ backgroundImage: `url(${FirstBlockBG})` }}
        id="firstBlock"
      >
        <div>
          <p className="orangeLine"></p>
          <h1>
            <b className="firstBlock"> Sua Nova Vida Começa Agora!</b>
          </h1>
          <p>
            Conquiste uma Vida Mais Saudável e Tenha um Negócio Próprio com a{" "}
            <strong>dōTERRA</strong>! Faça seu Cadastro Agora e Saiba Mais!
          </p>
          <FaAngleDoubleRight />
        </div>
        <div>
          <div className="centerBox">
            <h1 style={{ textAlign: "center" }}> Faça seu cadastro aqui </h1>
            <br />
            <hr />
            <br />
            <form>
              <label htmlFor="name">
                Nome
                <input type="text" name="name" placeholder="Digite seu nome" />
              </label>
              <label htmlFor="email">
                E-mail
                <input
                  type="text"
                  name="email"
                  placeholder="Digite seu e-mail"
                />
              </label>
              <label htmlFor="whatsapp">
                WhatsApp
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Digite seu número de WhatsApp"
                />
              </label>
              <button type="submit">CADASTRAR</button>
            </form>
          </div>
        </div>
        <br />
        <div className="blockDivision">
          <img src={blockDiv} alt="" />
        </div>
      </Block>
      <Block id="secondBlock">
        <img src={doTerraOleo} alt="" />
        <div>
          <h2>O Que São Óleos Essenciais?</h2>
          <br/>
          <p>
            Todo óleo essencial é um extrato da natureza que são encontrados em
            nossas plantas, podendo ter origem nas flores, raízes ou folhas.
          </p>
          <p>
            Cada componente aromático extraído tem propriedades químicas
            diferentes, por isso cada óleo tem um uso indicativo, seja como
            estimulante, calmante, regenerativo, refrescante, limpeza e até
            mesmo reforço do sistema imunológico.
          </p>
          <p>
            Costumamos dizer que os óleos essenciais são o poder da terra e da
            natureza em um frasco, até porque cada planta produz o óleo para sua
            proteção e manutenção, e utilizamos esse poder para nos fortalecer.
          </p>
        </div>
      </Block>
    </Container>
  );
}
