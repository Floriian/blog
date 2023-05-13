import { RequestInit } from "next/dist/server/web/spec-extension/request";

export default async function serverFetch<T>(
  uri: RequestInfo | URL,
  args?: RequestInit
): Promise<T> {
  try {
    const res = await fetch(process.env.BACKEND_URL! + uri, args);
    const data = res.json() as T;
    return data;
  } catch (e) {
    throw e;
  }
}
