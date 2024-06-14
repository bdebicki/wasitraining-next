import { Year } from '@/types/editions'
import Image from 'next/image'
import React from 'react'

type Props = {
	year: Year
}

export const HeadlinersImage = ({ year }: Props) => (
	<Image
		src={`/editions/headliners/headliners-${year}.svg`}
		alt={`Headliners ${year}`}
		width={100}
		height={100}
		style={{ width: 'initial', height: 'initial' }}
	/>
)
