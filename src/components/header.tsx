import React from 'react'
import Link from 'next/link'
import { getEditionsData } from '@/utils/edition'

export const HeaderPage = async () => {
	const editions = await getEditionsData()

	return (
		<header>
			<h1>
				<Link href="/public">
					was it raining at open&apos;er festival?
				</Link>
			</h1>
			<nav role="navigation">
				<ul>
					{editions.map(({ year }) => (
						<li key={year}>
							<Link href={`/editions/${year}`}>{year}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
