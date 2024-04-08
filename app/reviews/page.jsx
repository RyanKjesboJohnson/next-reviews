import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="border w-80 bg-white shadow rounded hover:shadow-xl">
          <Link href="/reviews/harvest-moon">
          <img src="/images/harvestmoon.jpeg" alt="Harvest Moon"
      width="320" height="180" className="rounded mb-2"/>
      <h2 className="text-center py-1 rounded-t">Harvest Moon</h2>
          </Link>
        </li>
        <li className="border w-80 bg-white shadow rounded hover:shadow-xl">
          <Link href="/reviews/oregontrail.jpeg">
          <img src="/images/oregontrail.jpeg" alt="Harvest Moon"
      width="320" height="180" className="rounded mb-2"/>
      <h2 className="text-center py-1 rounded-t">Oregon Trail</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
