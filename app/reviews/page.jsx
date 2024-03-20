import Link from 'next/link'

export default function ReviewsPage() {
    return (
        <>
        <h1>Reviews</h1>
        <ul>
            <li>
                <Link href="/reviews/harvest-moon">Harvest Moon</Link>
            </li>
            <li>
                <Link href="/reviews/oregon-trail">Oregon Trail</Link>
            </li>
        </ul>
        </>
    )
}