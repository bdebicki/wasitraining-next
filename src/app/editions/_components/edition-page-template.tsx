import React, { ReactNode } from 'react'
import Link from 'next/link'
import { getEditionsData } from '@/utils/getEditionsData'
import { Footer } from '@/app/_components/footer'

type Props = {
	children: ReactNode
}

export const EditionPageTemplate = async ({ children }: Props) => {
	const editions = await getEditionsData()

	return (
		<div>
			<header>
				<h1>
					<Link href="/public">
						was it raining at open'er festival?
					</Link>
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
			{children}
			<Footer />
		</div>
	)
}
