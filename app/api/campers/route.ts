import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isAxiosError } from "axios";
import { api } from "../api";
import { logErrorResponse } from "../_utils/utils";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();

    const page = Number(request.nextUrl.searchParams.get("page") ?? 1);
    const limit = Number(request.nextUrl.searchParams.get("limit") ?? 4);

    const params: Record<string, string | number> = {
      page,
      limit,
      location: request.nextUrl.searchParams.get("location") ?? "",
      ac: request.nextUrl.searchParams.get("ac") ?? "",
      transmission: request.nextUrl.searchParams.get("transmission") ?? "",
      kitchen: request.nextUrl.searchParams.get("kitchen") ?? "",
      tv: request.nextUrl.searchParams.get("tv") ?? "",
      bathroom: request.nextUrl.searchParams.get("bathroom") ?? "",
      form: request.nextUrl.searchParams.get("form") ?? "",
    };

    Object.keys(params).forEach((key) => {
      if (params[key] === "") {
        delete params[key];
      }
    });

    const res = await api.get("/campers", {
      params,
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.status }
      );
    }
    logErrorResponse({ message: (error as Error).message });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
