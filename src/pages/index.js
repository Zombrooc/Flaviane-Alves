import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import axios from "axios";

import Navbar from "../components/Navbar";

import FirstBlockBG from "../assets/images/doterranovo_bg1.jpg";
import ThirdBlockBG from "../assets/images/doterranovo_bg2.jpg";
import FourthBlockBG from "../assets/images/doterranovo_bg3.jpg";
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
import Toast from "../components/Toast";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  const [inputData, setInputData] = useState();
  const [ showToast, setShowToast]  = useState(false);

  const handleInput = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    axios
      .post("https://formcarry.com/s/h7wuzW5K6Rf", inputData, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        // access response.data in order to check formcarry response

        if (response.data.code === 200) {

          setShowToast(true);

          setInterval(() => {
            setShowToast(false);
          }, 6000)
        } else {
          // handle error
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  };

  return (
    <Container>
      <Head>
        <title>Flaviane Alves - dōTerra </title>
      </Head>
      <Toast show={showToast}/>
      <Navbar />
      <Block
        style={{ backgroundImage: `url(${FirstBlockBG})` }}
        id="firstBlock"
      >
        <div data-aos="fade-right">
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
        <div data-aos="fade-left">
          <div className="centerBox">
            <h1 style={{ textAlign: "center" }}> Faça seu cadastro aqui </h1>
            <br />
            <hr />
            <br />
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Nome
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="email">
                E-mail
                <input
                  type="text"
                  name="email"
                  placeholder="Digite seu e-mail"
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="whatsapp">
                WhatsApp
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Digite seu número de WhatsApp"
                  onChange={handleInput}
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
        <img src={doTerraOleo} alt="" data-aos="fade-right" />
        <div data-aos="fade-left">
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
        <img src={ThirdBlockBG} alt="Leaf Background" />
        <h2 data-aos="fade-up"> Quais os benefícios dos Óleos Essencias? </h2>
        <div className="grid-container">
          <div data-aos="fade-right">
            <img src={IconOne} alt="100% Natural" />
            <h3> 100% Natural </h3>

            <p>
              Todos os óleos essenciais são extraídos de plantas e são 100%
              naturais, seguros e eficazes
            </p>
          </div>
          <div data-aos="fade-right">
            <img src={IconTwo} alt="Antisséptico Poderoso" />
            <h3> Antisséptico Poderoso </h3>

            <p>Protege contra ameaças ambientais e mata germes e bactérias</p>
          </div>
          <div data-aos="fade-left">
            <img src={IconThree} alt="Emoções Temporárias" />
            <h3> Emoções Temporárias </h3>

            <p>
              Eleva o humor, reduz a irritabilidade, o sentimento de tristeza e
              muito mais
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={IconFour} alt="Estimulante Cerebral" />
            <h3> Estimulante Cerebral </h3>

            <p>
              Mais energia e foco para você ser mais produtivo(a) no seu
              dia-a-dia
            </p>
          </div>
          <div data-aos="fade-right">
            <img src={IconFive} alt="Usado Desde Sempre" />
            <h3> Usado Desde Sempre </h3>

            <p>
              Os povos antigos utilizam os extratos e partes das plantas em sua
              cultura
            </p>
          </div>
          <div data-aos="fade-right">
            <img src={IconSix} alt="Melhor Respiração" />
            <h3> Melhor Respiração </h3>

            <p>Evita problemas respiratórios e melhora a capacidade pulmonar</p>
          </div>
          <div data-aos="fade-left">
            <img src={IconSeven} alt="Durma Melhor" />
            <h3> Durma Melhor </h3>

            <p>
              Chega de insônia e de irritação por conta de más noites de sono
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={IconEight} alt="Melhora Pele e Cabelos" />
            <h3> Melhora Pele e Cabelos </h3>

            <p>
              Previnem o envelhecimento da pele e ajuda a ter cabelos mais
              fortes
            </p>
          </div>
        </div>
      </Block>
      <Block
        id="fourthBlock"
        style={{ backgroundImage: `url(${FourthBlockBG})` }}
      >
        <div style={{ maxWidth: "720px" }}>
          <p data-aos="fade-right">
            {" "}
            Em 2019, o mercado de Vendas Diretas gerou
          </p>
          <br />
          <h2 data-aos="fade-right"> 185.5 Bilhões de Dólares</h2>
          <h2
            style={{ fontWeight: "700", fontSize: "30px" }}
            data-aos="fade-right"
          >
            {" "}
            ou 963,15 bilhões de reais!
          </h2>
          <br />
          <p
            style={{
              fontWeight: "normal",
              margin: "0 0 15px",
              fontSize: "18px",
              lineHeight: "1.72222",
            }}
            data-aos="fade-right"
          >
            Faça parte de um Mercado que não para de Crescer mesmo em tempos de
            crise. O Brasil ocupa a 6º posição mundial com um total de R$54
            bilhões de reais por ano e continua crescendo anos após ano.
          </p>
        </div>
      </Block>
    </Container>
  );
}
