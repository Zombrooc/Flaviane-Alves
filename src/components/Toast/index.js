import React, { useEffect, useState } from "react";

import { Container } from "./styles";

export default function Toast({ show }) {
  return (
    <Container show={show}>
      <p>
        <strong> Recebemos sua mensagem! </strong> Logo entraremos em contato
        com você.
      </p>
    </Container>
  );
}
