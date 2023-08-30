/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Typography, Button, CircularProgress, TextField } from "@mui/material";
import { Container, Input, Label, FormContainer, CardWrapper } from "./styles";
import { login } from "../../api/Auth";
import { BasicModal } from "../../components/Modal/Modal";
import { BaseText } from "../../components/BaseText/BaseText";
import { Colors } from "../../config/Colors";

export const AuthScreen = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [modalErrorIsVisible, setModalErrorIsVisible] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await login(data);
      if (res.status !== 200) return setModalErrorIsVisible(true);

      const values = JSON.stringify({ ...res.data, ...data });

      localStorage.setItem("userData", values);
      setIsLoading(false);
      navigate("/inscription");
    } catch (err) {
      setModalErrorIsVisible(true);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BasicModal
        isVisible={modalErrorIsVisible}
        setIsVisible={(status) => setModalErrorIsVisible(status)}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Conta não encontrada
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          O email ou CPF/CNPJ inseridos não foram encontrados em nossa base de
          clientes inscritos em VAlora 2023. Verifique se está usando os mesmos
          dados cadastrados ou se realizou a inscrição corretamente.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{ backgroundColor: "transparent" }}
            onClick={() => setModalErrorIsVisible(false)}
          >
            <BaseText size={17} bold color={Colors.purple}>
              Tentar novamente
            </BaseText>
          </Button>
        </div>
      </BasicModal>
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "10px",
              }}
            >
              <TextField
                variant="filled"
                style={{
                  width: "100%",
                  marginBottom: "12px",
                  marginRight: "10px",
                }}
                disabled={isLoading}
                type="text"
                id="cpf"
                label="CPF/CNPJ"
                {...register("cpf", { required: true })}
              />

              <TextField
                variant="filled"
                style={{
                  width: "100%",
                  marginBottom: "12px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                disabled={isLoading}
                type="text"
                id="Email"
                label="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: 20,
              }}
            >
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button type="submit" variant="contained">
                  Avançar
                </Button>
              )}
            </div>
          </FormContainer>
        </div>
      </Container>
    </form>
  );
};
