import React, { ReactNode } from 'react'
import Link from 'next/link'
import { getEditionsData } from '@/utils/getEditionsData'
import { RootLayoutTemplate } from '@/app/_templates/root-layout-temlate'

type Props = {
	title: string
	children: ReactNode
}

export const TextPageTemplate = async ({ children, title }: Props) => {
	const editions = await getEditionsData()

	return (
		<RootLayoutTemplate>
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
									<Link href={`/editions/${year}`}>
										{year}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>
				{title}
				{children}
			</div>
		</RootLayoutTemplate>
	)
}
