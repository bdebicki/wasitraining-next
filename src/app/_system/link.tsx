import React from 'react'
import NextLink from 'next/link'

type BtnProps = {
	onClick?: () => void
	href?: never
	target?: never
}

type LinkProps = {
	href?: string
	target?: HTMLAnchorElement['target']
	onClick?: never
}

type ConditionalProps = BtnProps | LinkProps

type Props = ConditionalProps & {
	children: string
	title?: string
	hasDecoration?: boolean
	icon?: React.ReactElement
}

export const Link = ({
	children,
	href,
	target,
	title,
	onClick,
	icon,
}: Props) => {
	if (href) {
		return (
			<NextLink href={href} target={target} title={title}>
				{children} {icon}
			</NextLink>
		)
	}

	return (
		<button title={title} onClick={onClick}>
			{children} {icon}
		</button>
	)
}
