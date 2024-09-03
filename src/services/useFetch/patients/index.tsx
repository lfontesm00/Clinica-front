import { SetupAuthClient } from "../../../services/api";

const authClient = SetupAuthClient();

export async function getPatients() {
  const { data } = await authClient.get(`/api/patients`);

  return data;
}