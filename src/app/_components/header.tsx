import Link from 'next/link'
import React from 'react'
import { getEditionsData } from '@/utils/getEditionsData'

export const HeaderPage = async () => {
	const editions = await getEditionsData()

	return (
		<header>
			<h1>
				<Link href="/">was it raining at open'er festival?</Link>
			</h1>
			<nav role="navigation">
				<ul>
					{editions.map(({ editionYear: year }) => (
						<li key={year}>
							<Link href={`/editions/${year}`}>{year}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
