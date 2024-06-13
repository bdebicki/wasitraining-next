'use client'

import React, { useState } from 'react'
import { DailyLineup } from '@/types/editions'
import { Link } from '@/app/_system/link'
import { Dialog } from '@/app/_system/dialog'
import { LineupDayArtists } from '@/app/editions/_components/lineup-day-artists'

type Props = { lineup: DailyLineup; year: string }

export const LineupDetails = ({ lineup, year }: Props) => {
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
					{lineup.map(
						({
							day,
							artists: { headliners, lvl1, lvl2, others },
						}) => (
							<div key={day}>
								<h4>{day}</h4>
								<LineupDayArtists
									headliners={headliners}
									lvl1={lvl1}
									lvl2={lvl2}
									others={others}
								/>
							</div>
						)
					)}
				</Dialog>
			) : null}
		</>
	)
}
