'use client'

import React, { useState } from 'react'
import type { DailyLineup, Year } from '@/types/editions'
import { Link } from '@/system/link'
import { Dialog } from '@/system/dialog'
import { LineupList } from '@/app/editions/_components/lineup-list'
import { LineupImage } from '@/app/editions/_components/lineup-image'

type Props = {
	lineup: DailyLineup
	year: Year
}

export const Lineup = ({ lineup, year }: Props) => {
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
				see full lineup
			</Link>
			{isOpen ? (
				<Dialog title={`Lineup ${year}`} onClose={handleClose}>
					<LineupList lineup={lineup} />
					<LineupImage year={year} />
				</Dialog>
			) : null}
		</>
	)
}
