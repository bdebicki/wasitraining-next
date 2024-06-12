import Link from 'next/link'
import React from 'react'
import { getEditionsData } from '@/utils/edition'

export const Timeline = async () => {
	const editions = await getEditionsData()

	return (
		<nav role="navigation">
			<ul>
				{editions.map(({ year }) => (
					<li key={year}>
						<Link href={`/editions/${year}`}>{year}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
