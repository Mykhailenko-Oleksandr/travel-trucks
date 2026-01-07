"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import css from "./Catalog.module.css";
import { getTrucks } from "@/lib/api/clientApi";
import { Truck } from "@/types/truck";
import SideBar from "@/components/SideBar/SideBar";
import TrucksList from "@/components/TrucksList/TrucksList";

export default function CatalogClient() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["trucks"],
      queryFn: ({ pageParam = 1 }) =>
        getTrucks({
          page: pageParam,
          limit: 4,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const totalPages = Math.ceil(lastPage.total / 4);
        return allPages.length < totalPages ? allPages.length + 1 : undefined;
      },
    });

  const trucks: Truck[] = data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <section className={css.catalog}>
      <div className={`container ${css.containerCatalog}`}>
        <SideBar />

        {isLoading ? (
          <p>Loading...</p>
        ) : trucks.length > 0 ? (
          <TrucksList
            trucks={trucks}
            hasNextPage={hasNextPage}
            onClickBtn={() => {}}
          />
        ) : null}

        {isFetching && <p>Loading...</p>}
      </div>
    </section>
  );
}
