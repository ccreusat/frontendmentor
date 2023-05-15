import axios from "axios";
import { ItemProps } from "../types/types";

const instance = axios.create({
  baseURL: `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_JSBIN}`,
  headers: {
    "X-Master-Key": `$2b$10$RT/${import.meta.env.VITE_API_KEY}`,
  },
  timeout: 5000,
});

export const getJobs = async (records: number) => {
  const response = await instance.get("/");
  const { record } = response.data;
  return record.slice(0, records);
};

export const getJob = async (id: string | undefined) => {
  const response = await instance.get("/");
  const { record } = response.data;
  const job = await record.find((item: ItemProps) => item.id === Number(id));
  return job;
};

export default instance;
