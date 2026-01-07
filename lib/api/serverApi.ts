import { cookies } from "next/headers";
import { nextServer } from "./api";
import { GetTrucksParams, ResponseTrucks } from "./clientApi";

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
