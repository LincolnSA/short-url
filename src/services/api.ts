import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

interface ShortenUrlInput {
  url: string;
}

interface RedirectUrlInput {
  url: string;
}

interface DeleteUrlInput {
  url: string;
}

export async function shortenUrl(input: ShortenUrlInput) {
  const { data } = await api.post("/shorten", input);
  return data;
}

export async function redirectUrl(input: RedirectUrlInput) {
  const { data } = await api.get(`/redirect?url=${input.url}`);
  return data;
}

export async function listUrls() {
  const { data } = await api.get("/list");
  return data;
}

export async function deleteUrl(input: DeleteUrlInput) {
  const { data } = await api.delete("/delete", { data: input });
  return data;
}
