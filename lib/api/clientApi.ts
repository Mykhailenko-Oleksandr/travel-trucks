import { FormDataFilter, Truck } from "@/types/truck";
import { nextServer } from "./api";
import { ApiError } from "@/app/api/api";

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
  try {
    const res = await nextServer.get<ResponseTrucks>("/campers", {
      params: {
        page,
        limit,
        ...data,
      },
    });
    return res.data;
  } catch (err: unknown) {
    const error = err as ApiError;
    if (error.response?.status === 404) {
      return { items: [], total: 0 };
    }
    throw err;
  }
}

export async function getTruckById(id: string) {
  const res = await nextServer.get<Truck>(`/campers/${id}`);

  return res.data;
}
