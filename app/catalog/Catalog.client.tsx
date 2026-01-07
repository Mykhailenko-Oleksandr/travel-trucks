"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import css from "./Catalog.module.css";
import { getTrucks } from "@/lib/api/clientApi";
import { FormDataFilter, Truck } from "@/types/truck";
import SideBar from "@/components/SideBar/SideBar";
import TrucksList from "@/components/TrucksList/TrucksList";
import Loader from "@/components/Loader/Loader";
import { useState } from "react";

export default function CatalogClient() {
  const [filter, setFilters] = useState<FormDataFilter>({});

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["trucks", filter],
      queryFn: ({ pageParam = 1 }) =>
        getTrucks({
          page: pageParam,
          limit: 4,
          data: filter,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const totalPages = Math.ceil(lastPage.total / 4);
        return allPages.length < totalPages ? allPages.length + 1 : undefined;
      },
    });

  const trucks: Truck[] = data?.pages.flatMap((page) => page.items) ?? [];

  const handleLoadMore = () => {
    const currentScrollPosition = window.pageYOffset;

    fetchNextPage().then(() => {
      setTimeout(() => {
        window.scrollTo({
          top: currentScrollPosition + 600,
          behavior: "smooth",
        });
      }, 100);
    });
  };

  function handleSaveFilter(newFilters: FormDataFilter) {
    setFilters(newFilters);
  }

  return (
    <section className={css.catalog}>
      <div className={`container ${css.containerCatalog}`}>
        <SideBar saveFilter={handleSaveFilter} />

        {isLoading ? (
          <Loader />
        ) : trucks.length > 0 ? (
          <TrucksList
            trucks={trucks}
            hasNextPage={hasNextPage}
            onClickBtn={handleLoadMore}
            loading={isFetching}
          />
        ) : null}

        {isFetching && <Loader />}
      </div>
    </section>
  );
}
