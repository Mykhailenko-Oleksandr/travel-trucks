import { getTruckById } from "@/lib/api/serverApi";
import css from "./TruckById.module.css";
import Image from "next/image";
import InfoTruck from "@/components/InfoTruck/InfoTruck";
import { Metadata } from "next";

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

  const truck = await getTruckById(id);

  return (
    <section className={css.truck}>
      <div className="container">
        <h2 className={css.title}>{truck.name}</h2>
        <div className={css.ratingLocationBox}>
          <div className={css.ratingBox}>
            <svg
              className={css.ratingIcon}
              width={16}
              height={16}>
              <use href="/sprite.svg#icon-rating"></use>
            </svg>
            <p className={css.ratingText}>
              {truck.rating}({truck.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationBox}>
            <svg
              className={css.locationIcon}
              width={16}
              height={16}>
              <use href="/sprite.svg#icon-map"></use>
            </svg>
            <p className={css.locationText}>{truck.location}</p>
          </div>
        </div>
        <p className={css.price}>&euro;{truck.price.toFixed(2)}</p>
        <div className={css.imagesBox}>
          {truck.gallery.length > 0 &&
            truck.gallery.map((image) => (
              <div
                key={image.thumb}
                className={css.imgBox}>
                <Image
                  src={image.thumb}
                  alt="Image truck"
                  width={292}
                  height={312}
                  className={css.truckImg}
                />
              </div>
            ))}
        </div>
        <p className={css.description}>{truck.description}</p>
        <InfoTruck truck={truck} />
      </div>
    </section>
  );
}
