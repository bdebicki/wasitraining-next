import React, { ReactNode } from 'react'
import { RootLayoutTemplate } from '@/templates/root-layout-template'
import { HeaderPage } from '@/components/header'

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
