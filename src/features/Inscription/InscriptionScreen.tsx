import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, Container, Input } from "./styles";

const talhoes = [
  { id: 1, name: "Talhão 1", status: "Em andamento", inputs: {} },
  { id: 2, name: "Talhão 2", status: "Não preenchido", inputs: {} },
  { id: 3, name: "Talhão 3", status: "Não preenchido", inputs: {} },
  { id: 4, name: "Talhão 4", status: "Concluido", inputs: {} },
];

const chipColor = (status: string) => {
  if (status === "Em andamento") return "warning";
  if (status === "Não preenchido") return "default";
  if (status === "Concluido") return "success";
  return "primary";
};

export const InscriptionScreen = () => {
  return (
    <Container>
      {talhoes.map((talhao, index) => {
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
                  <Typography>{talhao.name}</Typography>
                  <Chip
                    color={chipColor(talhao.status)}
                    label={talhao.status}
                  />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Input
                  type="text"
                  id="Concentração"
                  placeholder="Concentração"
                  value={""}
                  onChange={() => {}}
                />
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
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </Container>
  );
};
