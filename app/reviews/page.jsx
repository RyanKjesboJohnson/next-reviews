import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul>
        <li>
          <Link href="/reviews/harvest-moon">Harvest Moon</Link>
        </li>
        <li>
          <Link href="/reviews/oregon-trail">Oregon Trail</Link>
        </li>
      </ul>
    </>
  );
}
