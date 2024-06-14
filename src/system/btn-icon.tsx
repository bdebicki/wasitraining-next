import React from 'react'

type Props = {
	icon: string
	label: string
	onClick: () => void
}

export const BtnIcon = ({ icon, label, onClick }: Props) => (
	<button title={label} onClick={onClick}>
		{icon}
	</button>
)
