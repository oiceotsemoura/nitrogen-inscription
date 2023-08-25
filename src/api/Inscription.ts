import axios, { AxiosResponse } from "axios";

interface LoginReq {
  email: string;
  cpf: string;
}

interface Input {
  checkstrip_dose: number;
  completed: boolean;
  dose_type: string;
  enrollment_id: number;
  field_status: string;
  nitrogen_dose: number;
  nitrogen_source: string;
}

interface Field {
  enrollment_id: number;
  field_name: string;
  input: Input;
}

interface LoginRes {
  email: string;
  fields: Field[];
  growing_season: string;
  name: string;
}

export const login = async (values: LoginReq) => {
  const response: AxiosResponse<LoginRes> = await axios.get(
    `https://oox9hmqkb5.execute-api.us-east-1.amazonaws.com/dev/valGetFieldsInfo?email=${values.email}&cpf=${values.cpf}`
  );
  return response;
};
