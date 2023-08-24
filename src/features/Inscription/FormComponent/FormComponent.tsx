import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";

import { Card, Container, Input, Label } from "./styles";

const fonteFertilizantes = [
  "Urea granulada (46 %N)",
  "UAN (32 %N)",
  "SolMix (30 %N)",
  "SolMix (28 %N)",
  "SolMix (26 %N)",
  "Nitrodoble (27 %N)",
  "Nitrocomplex (21 %N)",
  "Sulfan (26 %N)",
  "Last N (20 %N)",
  "FoliarSol U (20 %N)",
  "Nitramin (31 %N)",
];

interface FormData {
  nitrogenDose?: number;
  nitrogenSource?: string;
  dose?: string;
  nitrogenDoseTest?: number;
}

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const [formData, setFormData] = useState<FormData>({});
  const { nitrogenDose, nitrogenSource, dose, nitrogenDoseTest } = formData;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        style={{
          fontWeight: 500,
          fontSize: 18,
          fontFamily: "Roboto",
          color: "#5C5C5C",
          marginBottom: 10,
        }}
      >
        Dose de Nitrogênio (kg N/ha) utilizada em estágios iniciais
        (pré-plantio, emergência). Atenção: refere-se ao nitrogênio como
        elemento, não à fonte do fertilizante.
      </Typography>
      <Input
        type="number"
        placeholder="Numero entre 0 e 250"
        value={nitrogenDose}
        {...register("nitrogenDose", { required: true })}
      />
      <div style={{ marginBottom: 25 }}>
        <Typography
          style={{
            fontWeight: 500,
            fontSize: 18,
            fontFamily: "Roboto",
            color: "#5C5C5C",
            marginBottom: 10,
          }}
        >
          Fonte de fertilizante a ser utilizada na refertilização (Ureia,
          18-18-18, Sulfato de Amônio...).
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={fonteFertilizantes}
          sx={{ width: 300 }}
          {...register("nitrogenSource", { required: true })}
          renderInput={(params) => (
            <TextField {...params} label="Escolha uma das fontes" />
          )}
        />
      </div>
      <div style={{ marginBottom: 25 }}>
        <Typography
          style={{
            fontWeight: 500,
            fontSize: 18,
            fontFamily: "Roboto",
            color: "#5C5C5C",
          }}
        >
          Apenas para fins informativos: Indique se até o momento você já
          utiliza aplicação de dose fixa ou variável em seus lotes.
        </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="fixa" control={<Radio />} label="Fixa" />
          <FormControlLabel
            value="variavel"
            control={<Radio />}
            label="Variável"
          />
          <FormControlLabel value="ambos" control={<Radio />} label="Ambos" />
        </RadioGroup>
      </div>

      <div>
        <Typography
          style={{
            fontWeight: 500,
            fontSize: 18,
            fontFamily: "Roboto",
            color: "#5C5C5C",
            marginBottom: 10,
          }}
        >
          Se você deseja utilizar seu dose do nitrogeno na faixa teste, indique
          a dose a ser utilizada.
        </Typography>
        <Input
          type="number"
          id="Concentração"
          placeholder="O valor deve ser um número"
          value={""}
          onChange={() => {}}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: 20,
        }}
      >
        <Button disabled onClick={() => {}} variant="outlined">
          Enviar
        </Button>
      </div>
    </form>
  );
};
