import Link from 'next/link'
import React from 'react'
import { edition } from '@/utils/edition'

export const Timeline = async () => {
	const editions = await edition()

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
