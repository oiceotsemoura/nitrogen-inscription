/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { Container, Input, Label, FormContainer, CardWrapper } from "./styles";

export const AuthScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  return (
    <>
      <Container>
        <div style={{ marginBottom: 30 }}>
          <Typography
            style={{
              fontWeight: 400,
              fontSize: 25,
              fontFamily: "Roboto",
              paddingBottom: 12,
            }}
          >
            Solicitação de prescrição de nitrogênio
          </Typography>

          <FormContainer>
            <Typography
              style={{ fontSize: 18, fontFamily: "Roboto", color: "#5C5C5C" }}
            >
              Bayer VAlora milho te apoia a explorar rentabilidade com seu
              investimento adicional protegido! Potencialize seus talhões de
              milho Bayer com prescrições de densidade populacional de sementes
              e recomendações de aplicação de nitrogênio customizadas.
              Certifique-se de que você inscreveu e plantou corretamente os
              talhões que deseja solicitar.Esta recomendação é uma cortesia
              Bayer para os clientes da Safra Verão 2023.
            </Typography>
          </FormContainer>
        </div>
        <div>
          <Typography
            style={{
              fontWeight: 400,
              fontSize: 25,
              fontFamily: "Roboto",
              paddingBottom: 12,
            }}
          >
            Informações pessoais e identificação
          </Typography>
          <FormContainer>
            <div style={{ marginBottom: 10 }}>
              <Typography
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                  fontFamily: "Roboto",
                  color: "#5C5C5C",
                }}
              >
                Dados do cliente
              </Typography>
              <Typography
                style={{
                  fontWeight: 300,
                  fontSize: 14,
                  fontFamily: "Roboto",
                  color: "#5C5C5C",
                }}
              >
                Lembre-se de usar os mesmos dados inscritos no programa VAlora
                Milho 2023
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Input
                type="text"
                id="nome"
                placeholder="CPF/CNPJ"
                value={name}
                onChange={(event) => setCPF(event.target.value)}
              />

              <Input
                type="text"
                id="Nome"
                placeholder="Nome"
                value={cpf}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: 20,
              }}
            >
              <Button
                onClick={() => {
                  navigate("/inscription");
                }}
                variant="contained"
              >
                Avançar
              </Button>
            </div>
          </FormContainer>
        </div>
      </Container>
    </>
  );
};
