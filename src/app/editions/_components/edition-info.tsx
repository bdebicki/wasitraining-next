import React from 'react'
import { Artist, DailyLineup, EditionInformation } from '@/types/editions'
import { LineupDetails } from '@/app/editions/_components/lineup-details'

export type Props = EditionInformation & {
	date: {
		start: string
		end?: string
	}
	headliners: Array<Artist>
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
			<ul>
				{headliners.map((artist: Artist) => {
					return typeof artist === 'string' ? (
						<li key={artist}> {artist}</li>
					) : !artist.canceled ? (
						<li key={artist.artist}> {artist.artist}</li>
					) : null
				})}
			</ul>
			<LineupDetails year={year} lineup={lineup} />
		</section>
	)
}
