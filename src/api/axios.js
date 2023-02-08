import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.SYNCED_SERVER_URL}`,
});

export const getFilteredConversations = async () => {
  const response = await api.get("/conversations");
  return response.data;
};
