import React, { useEffect } from "react";
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
import { LoginRes } from "../../api/Auth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormComponent } from "./FormComponent/FormComponent";
import { Card, Container, Input, Label } from "./styles";

const talhoes = [
  { id: 1, name: "Talhão 1", status: "Em andamento", inputs: {} },
  { id: 2, name: "Talhão 2", status: "Não preenchido", inputs: {} },
  { id: 3, name: "Talhão 3", status: "Não preenchido", inputs: {} },
  { id: 4, name: "Talhão 4", status: "Concluido", inputs: {} },
];

const chipColor = (status: string) => {
  if (status === "started") return "warning";
  if (status === "empty") return "default";
  if (status === "completed") return "success";
  return "primary";
};

const statusObject = {
  completed: "Concluído",
  started: "Em andamento",
  empty: "Não preenchido",
};

export const InscriptionScreen = () => {
  const userData: LoginRes = JSON.parse(
    localStorage.getItem("userData") as string
  );

  return (
    <Container>
      {userData.fields.map((field, index) => {
        return (
          <div style={{ marginBottom: 10 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: 10,
                  }}
                >
                  <Typography>{field.field_name}</Typography>
                  <Chip
                    color={chipColor(field.input.field_status)}
                    label={statusObject[field.input.field_status]}
                  />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <FormComponent />
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </Container>
  );
};
