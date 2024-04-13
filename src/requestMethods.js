import axios from "axios";
// const LocalBASE_URL = "https://f4e7-2401-4900-1c96-190e-ccdf-d723-c856-c1f0.ngrok-free.app/api/";
const LocalBASE_URL = "https://note-backend-five.vercel.app/api/";
// const BASE_URL = "https://notesharingbackend-ankitkr437.onrender.com/api/";

export const pf =
  "https://notesharingbackend-ankitkr437.onrender.com/images";

export const publicRequest = axios.create({
  baseURL: LocalBASE_URL,
});

export const userRequest = axios.create({
  baseURL: LocalBASE_URL,
});
