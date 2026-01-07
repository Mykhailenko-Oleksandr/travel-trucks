import { FormDataFilter, Truck } from "@/types/truck";
import { nextServer } from "./api";

export interface GetTrucksParams {
  page: number;
  limit: number;
  data?: FormDataFilter;
}

export interface ResponseTrucks {
  total: number;
  items: Truck[];
}

export async function getTrucks({
  page = 1,
  limit = 4,
  data,
}: GetTrucksParams) {
  const res = await nextServer.get<ResponseTrucks>("/campers", {
    params: {
      page,
      limit,
      ...data,
    },
  });
  return res.data;
}
