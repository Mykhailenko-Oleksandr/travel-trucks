import { cookies } from "next/headers";
import { nextServer } from "./api";
import { FormDataFilter, Truck } from "@/types/truck";

export async function getTrucks(data?: FormDataFilter) {
  const cookieStore = await cookies();
  const res = await nextServer.get<Truck[]>("/campers", {
    params: {
      ...data,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}
