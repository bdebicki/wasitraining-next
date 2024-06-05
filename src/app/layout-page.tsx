import React, { ReactNode } from 'react'
import Link from 'next/link'
import { getEditionsData } from '@/utils/getEditionsData'

type Props = {
	children: ReactNode
}

const LayoutSecondary = async ({ children }: Props) => {
	const editions = await getEditionsData()

	return (
		<div>
			<header>
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
			</header>
			{children}
		</div>
	)
}

export default LayoutSecondary
