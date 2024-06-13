import React from 'react'
import { BtnIcon } from '@/app/_system/btn-icon'

type Props = {
	title: string
	onClose: () => void
	children: React.ReactNode
}

export const Dialog = ({ title, onClose, children }: Props) => (
	<div>
		<header>
			<h3>{title}</h3>
			<BtnIcon icon="close" label="close" onClick={onClose} />
		</header>
		{children}
	</div>
)
