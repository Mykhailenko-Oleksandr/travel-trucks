import Image from "next/image";
import css from "./TrucksItem.module.css";
import { Truck } from "@/types/truck";

interface TrucksItemProps {
  truck: Truck;
}

export default function TrucksItem({ truck }: TrucksItemProps) {
  return (
    <div className={css.travelCard}>
      <Image
        className={css.image}
        src={truck.gallery[0].original}
        alt={truck.name}
        width={292}
        height={320}
      />
      <div className={css.infoBox}>
        <div className={css.titleBox}>
          <h3 className={css.title}>{truck.name}</h3>
          <div className={css.priceBox}>
            <p className={css.price}>{truck.price}</p>
            <button className={css.like} type="button">
              <svg className={css.likeIcon} width={26} height={24}>
                <use href="/sprite.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//   "id": "1",
//     "name": "Road Bear C 23-25",
//     "price": 10000,
//     "rating": 4.5,
//     "location": "Ukraine, Kyiv",
//     "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
//     "form": "alcove",
//     "length": "7.3m",
//     "width": "2.65m",
//     "height": "3.65m",
//     "tank": "208l",
//     "consumption": "30l/100km",
//     "transmission": "automatic",
//     "engine": "diesel", "AC": true,
//     "bathroom": true,
//     "kitchen": false,
//     "TV": true,
//     "radio": true,
//     "refrigerator": false,
//     "microwave": true,
//     "gas": false,
//     "water": true,
//     "gallery": [{
//       "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//       "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
//   },
//     {
//       "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//       "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
//     },
//     {
//       "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
//       "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//     }],
//     "reviews": [
//       {
//         "reviewer_name": "Alice",
//         "reviewer_rating": 5,
//         "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//       },
//       {
//         "reviewer_name": "Bob",
//         "reviewer_rating": 4,
//         "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//       }]
// }
