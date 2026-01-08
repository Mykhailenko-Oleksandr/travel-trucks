import { cookies } from "next/headers";
import { nextServer } from "./api";
import { GetTrucksParams, ResponseTrucks } from "./clientApi";
import { Truck } from "@/types/truck";

export async function getTrucks({
  page = 1,
  limit = 4,
  data,
}: GetTrucksParams) {
  const cookieStore = await cookies();

  const res = await nextServer.get<ResponseTrucks>("/campers", {
    params: {
      page,
      limit,
      ...data,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res.data;
}

export async function getTruckById(id: string) {
  const cookieStore = await cookies();

  const res = await nextServer.get<Truck>(`/campers/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res.data;
}
