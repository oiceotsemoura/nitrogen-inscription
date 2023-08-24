import React, { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BaseText } from "../BaseText/BaseText";
import { Colors } from "../../config/Colors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: 1,
  borderColor: "transparent",
  boxShadow: 24,
  p: 4,
};

interface Props {
  isVisible: boolean;
  setIsVisible: (status: boolean) => void;
}

export const BasicModal = ({
  isVisible,
  setIsVisible,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Modal
      style={{ borderWidth: 30, borderColor: "red" }}
      open={isVisible}
      onClose={() => setIsVisible(false)}
      disableEnforceFocus
    >
      <Box sx={style}>{props.children}</Box>
    </Modal>
  );
};
