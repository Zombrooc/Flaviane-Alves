import React from "react";
import Head from "next/head";
import Link from 'next/link';

import Navbar from "../components/Navbar";

import {
  Container
} from "../styles/pages/home.styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>döTerra - Flaviane Alves</title>
      </Head>
      <Navbar />
      <h1> Hello Next.JS + NextAuth </h1>
    </Container>
  );
}
