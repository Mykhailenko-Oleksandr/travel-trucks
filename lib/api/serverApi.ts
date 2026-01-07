import { cookies } from "next/headers";
import { nextServer } from "./api";
import { Truck } from "@/types/truck";

export async function getTrucks(page: number, limit: number) {
  const cookieStore = await cookies();
  const res = await nextServer.get<Truck[]>("/campers", {
    params: {
      page,
      limit,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}
