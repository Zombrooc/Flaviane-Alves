import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import axios from "axios";

import Navbar from "../components/Navbar";
import Toast from "../components/Toast";

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

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  const [inputData, setInputData] = useState();
  const [showToast, setShowToast] = useState(false);

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

          setTimeout(() => {
            setShowToast(false);
          }, 7 * 1000);
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
        <title>Flaviane Alves - d??Terra </title>
      </Head>
      <Toast show={showToast} />
      <Navbar />
      <Block
        style={{ backgroundImage: `url(${FirstBlockBG})` }}
        id="firstBlock"
      >
        <div data-aos="fade-right">
          <p className="orangeLine"></p>
          <h1>
            <b className="firstBlock"> Sua Nova Vida Come??a Agora!</b>
          </h1>
          <p>
            Conquiste uma Vida Mais Saud??vel e Tenha um Neg??cio Pr??prio com a{" "}
            <strong>d??TERRA</strong>! Fa??a seu Cadastro Agora e Saiba Mais!
          </p>
          <FaAngleDoubleRight />
        </div>
        <div data-aos="fade-left">
          <div className="centerBox">
            <h1 style={{ textAlign: "center" }}> Fa??a seu cadastro aqui </h1>
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
                  placeholder="Digite seu n??mero de WhatsApp"
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
          <h2>O Que S??o ??leos Essenciais?</h2>
          <br />
          <p>
            Todo ??leo essencial ?? um extrato da natureza que s??o encontrados em
            nossas plantas, podendo ter origem nas flores, ra??zes ou folhas.
          </p>
          <p>
            Cada componente arom??tico extra??do tem propriedades qu??micas
            diferentes, por isso cada ??leo tem um uso indicativo, seja como
            estimulante, calmante, regenerativo, refrescante, limpeza e at??
            mesmo refor??o do sistema imunol??gico.
          </p>
          <p>
            Costumamos dizer que os ??leos essenciais s??o o poder da terra e da
            natureza em um frasco, at?? porque cada planta produz o ??leo para sua
            prote????o e manuten????o, e utilizamos esse poder para nos fortalecer.
          </p>
        </div>
      </Block>
      <Block
        id="thirdBlock"
        // style={{ backgroundImage: `url(${SecondBlockBG})` }}
      >
        <img src={ThirdBlockBG} alt="Leaf Background" />
        <h2 data-aos="fade-up"> Quais os benef??cios dos ??leos Essencias? </h2>
        <div className="grid-container">
          <div data-aos="fade-right">
            <img src={IconOne} alt="100% Natural" />
            <h3> 100% Natural </h3>

            <p>
              Todos os ??leos essenciais s??o extra??dos de plantas e s??o 100%
              naturais, seguros e eficazes
            </p>
          </div>
          <div data-aos="fade-right">
            <img src={IconTwo} alt="Antiss??ptico Poderoso" />
            <h3> Antiss??ptico Poderoso </h3>

            <p>Protege contra amea??as ambientais e mata germes e bact??rias</p>
          </div>
          <div data-aos="fade-left">
            <img src={IconThree} alt="Emo????es Tempor??rias" />
            <h3> Emo????es Tempor??rias </h3>

            <p>
              Eleva o humor, reduz a irritabilidade, o sentimento de tristeza e
              muito mais
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={IconFour} alt="Estimulante Cerebral" />
            <h3> Estimulante Cerebral </h3>

            <p>
              Mais energia e foco para voc?? ser mais produtivo(a) no seu
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
            <img src={IconSix} alt="Melhor Respira????o" />
            <h3> Melhor Respira????o </h3>

            <p>Evita problemas respirat??rios e melhora a capacidade pulmonar</p>
          </div>
          <div data-aos="fade-left">
            <img src={IconSeven} alt="Durma Melhor" />
            <h3> Durma Melhor </h3>

            <p>
              Chega de ins??nia e de irrita????o por conta de m??s noites de sono
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
          <h2 data-aos="fade-right"> 185.5 Bilh??es de D??lares</h2>
          <h2
            style={{ fontWeight: "700", fontSize: "30px" }}
            data-aos="fade-right"
          >
            {" "}
            ou 963,15 bilh??es de reais!
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
            Fa??a parte de um Mercado que n??o para de Crescer mesmo em tempos de
            crise. O Brasil ocupa a 6?? posi????o mundial com um total de R$54
            bilh??es de reais por ano e continua crescendo anos ap??s ano.
          </p>
        </div>
      </Block>
      
    </Container>
  );
}
