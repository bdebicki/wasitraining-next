import React from 'react'
import NextLink from 'next/link'

type Props = {
	children: string
	href: string
	target?: HTMLAnchorElement['target']
	title?: string
}

export const Link = ({ children, href, target, title }: Props) => {
	return (
		<NextLink href={href} target={target} title={title}>
			{children}
		</NextLink>
	)
}
