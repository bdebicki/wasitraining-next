import React from 'react'
import Link from 'next/link'
import { getEditionsData } from '@/utils/getEditionsData'

const Home = async () => {
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
			<footer>
				<Link href="/about">about</Link>
				<Link href="/cookies">cookies</Link>
			</footer>
		</main>
	)
}

export default Home
