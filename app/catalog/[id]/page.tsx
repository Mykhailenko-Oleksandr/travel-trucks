import { getTruckById } from "@/lib/api/serverApi";
import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TruckByIdClient from "./TruckById.client";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const truck = await getTruckById(id);
  return {
    title: truck.name,
    description: truck.description,
    openGraph: {
      title: truck.name,
      description: truck.description,
      url: `https://travel-trucks-opal-omega.vercel.app/catalog/${id}`,
      images: [
        {
          url: truck.gallery[0].thumb,
        },
      ],
    },
  };
}

export default async function TruckById({ params }: Props) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["truck", id],
    queryFn: () => getTruckById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TruckByIdClient />
    </HydrationBoundary>
  );
}
