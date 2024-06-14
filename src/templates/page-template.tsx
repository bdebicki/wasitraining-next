import React, { ReactNode } from 'react'
import { HeaderPage } from '@/components/header'
import { RootLayoutTemplate } from '@/templates/root-layout-template'

type Props = {
	title?: string
	children: ReactNode
}

export const PageTemplate = ({ children, title }: Props) => {
	return (
		<RootLayoutTemplate>
			<HeaderPage />
			{title}
			{children}
		</RootLayoutTemplate>
	)
}
