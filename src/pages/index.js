import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import Navbar from "../components/Navbar";

import FirstBlockBG from "../assets/images/doterranovo_bg1.jpg";
import SecondBlockBG from "../assets/images/doterranovo_bg2.jpg";
import blockDiv from "../assets/images/blockDiv.png";
import doTerraOleo from "../assets/images/doterranovo_oleo1.jpg";

import IconOne from "../assets/images/icons/doterranovo_icone1.png";
import IconTwo from "../assets/images/icons/doterranovo_icone2.png";
import IconThree from "../assets/images/icons/doterranovo_icone3.png";
import IconFour from "../assets/images/icons/doterranovo_icone4.png";
import IconFive from "../assets/images/icons/doterranovo_icone5.png";
import IconSix from "../assets/images/icons/doterranovo_icone6.png";
import IconSeven from "../assets/images/icons/doterranovo_icone7.png";
import IconEight from "../assets/images/icons/doterranovo_icone8.png";

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
          <br />
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
      <Block
        id="thirdBlock"
        // style={{ backgroundImage: `url(${SecondBlockBG})` }}
      >
        <img src={SecondBlockBG} alt="Leaf Background" />
        <h2> Quais os benefícios dos Óleos Essencias? </h2>
        <div className="grid-container">
          <div>
            <img src={IconOne} alt="" />
            <h3> 100% Natural </h3>

            <p>
              Todos os óleos essenciais são extraídos de plantas e são 100%
              naturais, seguros e eficazes
            </p>
          </div>
          <div>
            <img src={IconTwo} alt="" />
            <h3> Antisséptico Poderoso </h3>

            <p>Protege contra ameaças ambientais e mata germes e bactérias</p>
          </div>
          <div>
            <img src={IconThree} alt="" />
            <h3> Emoções Temporárias </h3>

            <p>
              Eleva o humor, reduz a irritabilidade, o sentimento de tristeza e
              muito mais
            </p>
          </div>
          <div>
            <img src={IconFour} alt="" />
            <h3> Estimulante Cerebral </h3>

            <p>
              Mais energia e foco para você ser mais produtivo(a) no seu
              dia-a-dia
            </p>
          </div>
          <div>
            <img src={IconFive} alt="" />
            <h3> Usado Desde Sempre </h3>

            <p>
              Os povos antigos utilizam os extratos e partes das plantas em sua
              cultura
            </p>
          </div>
          <div>
            <img src={IconSix} alt="" />
            <h3> Melhor Respiração </h3>

            <p>Evita problemas respiratórios e melhora a capacidade pulmonar</p>
          </div>
          <div>
            <img src={IconSeven} alt="" />
            <h3> Durma Melhor </h3>

            <p>
              Chega de insônia e de irritação por conta de más noites de sono
            </p>
          </div>
          <div>
            <img src={IconEight} alt="" />
            <h3> Melhora Pele e Cabelos </h3>

            <p>
              Previnem o envelhecimento da pele e ajuda a ter cabelos mais
              fortes
            </p>
          </div>
        </div>
      </Block>
    </Container>
  );
}
