'use client'

import React, { useState } from 'react'
import { BtnIcon } from '@/system/btn-icon'
import { Dialog } from '@/system/dialog'
import { Link } from '@/system/link'
import type { RainDetails as Details } from '@/types/rain'
import { setRainFromProp } from '@/utils/setRainFromProp'

type Props = {
	details: Details
}

export const RainDetails = ({ details }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleRainDetails = () => {
		setIsOpen(true)
	}
	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Link onClick={handleRainDetails} icon="plus">
				more
			</Link>
			{isOpen ? (
				<Dialog title="Rain" onClose={handleClose}>
					<ul>
						{details.map(({ date, isRaining }) => (
							<li key={date}>
								<span>{date}</span>
								<span>{setRainFromProp(isRaining)}</span>
							</li>
						))}
					</ul>
				</Dialog>
			) : null}
		</>
	)
}
