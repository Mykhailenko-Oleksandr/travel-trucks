import { getTruckById } from "@/lib/api/serverApi";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function TruckById({ params }: Props) {
  const { id } = await params;

  const truck = await getTruckById(id);
  return <></>;
}
