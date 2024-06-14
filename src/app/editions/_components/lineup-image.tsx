import React from 'react'
import type { Year } from '@/types/editions'
import Image from 'next/image'

type Props = {
	year: Year
}

export const LineupImage = ({ year }: Props) => (
	<Image
		src={`/editions/posters/poster-${year}.svg`}
		alt={`Headliners ${year}`}
		width={100}
		height={100}
		style={{ width: 'initial', height: 'initial' }}
	/>
)
