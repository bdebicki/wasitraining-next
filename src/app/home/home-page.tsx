import React from 'react'
import Link from 'next/link'
import { getEditionsData } from '@/utils/getEditionsData'
import { Footer } from '@/app/_components/footer'

export const HomePage = async () => {
	const editions = await getEditionsData()

	return (
		<main>
			<h1>was it raining at open'er festival?</h1>
			<nav role="navigation">
				<ul>
					{editions.map(({ editionYear: year }) => (
						<li key={year}>
							<Link href={`/editions/${year}`}>{year}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Footer />
		</main>
	)
}
