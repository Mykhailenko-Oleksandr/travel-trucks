import { getTrucks } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse the full catalog of campervans and trucks available for rent. Compare models, prices, and features to find the perfect vehicle for your next trip.",
  openGraph: {
    title: "TravelTrucks – Vehicle Catalog",
    description:
      "Discover our catalog of campervans and trucks for rent. Choose the right vehicle for your adventure.",
    url: "https://",
    images: [
      {
        url: "/images/hero.webp",
      },
    ],
  },
};

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["trucks", {}],
    queryFn: ({ pageParam = 1 }) => getTrucks({ page: pageParam, limit: 4 }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
