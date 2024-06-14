import React from 'react'
import { ArtistList, DailyLineup, EditionInformation } from '@/types/editions'
import { LineupDetails } from '@/app/editions/_components/lineup-details'
import { HeadlinersImage } from '@/app/editions/_components/headliners-image'
import { HeadlinersList } from '@/app/editions/_components/headliners-list'

export type Props = EditionInformation & {
	date: {
		start: string
		end?: string
	}
	headliners: ArtistList
	lineup: DailyLineup
}

export const EditionInfo = ({
	year,
	fullName,
	date,
	place,
	headliners,
	lineup,
}: Props) => {
	const { start, end } = date
	const { city, object } = place

	return (
		<section>
			<h2>{year}</h2>
			<h3>{fullName}</h3>
			<p>
				{start} {end ? ` - ${end}` : ''}
			</p>
			<p>
				{object}, {city}
			</p>
			<HeadlinersImage year={year} headliners={headliners} />
			<HeadlinersList headliners={headliners} />
			<LineupDetails year={year} lineup={lineup} />
		</section>
	)
}
