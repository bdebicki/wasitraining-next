import React, { ReactNode } from 'react'
import Link from 'next/link'
import { getEditionsData } from '@/utils/getEditionsData'
import { RootLayoutTemplate } from '@/app/_templates/root-layout-temlate'

type Props = {
	children: ReactNode
}

export const EditionPageTemplate = async ({ children }: Props) => {
	const editions = await getEditionsData()

	return (
		<RootLayoutTemplate>
			<div>
				<header>
					<h1>
						<Link href="/">
							was it raining at open'er festival?
						</Link>
					</h1>
					<nav role="navigation">
						<ul>
							{editions.map(({ editionYear: year }) => (
								<li key={year}>
									<Link href={`/editions/${year}`}>
										{year}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>
				{children}
			</div>
		</RootLayoutTemplate>
	)
}
