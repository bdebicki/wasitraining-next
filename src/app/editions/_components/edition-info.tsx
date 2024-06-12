import React from 'react'
import type { Artist, EditionInformation } from '@/types/editions'

export type Props = EditionInformation & {
	date: {
		start: string
		end?: string
	}
	headliners: Array<Artist>
}

export const EditionInfo = ({
	year,
	fullName,
	date,
	place,
	headliners,
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
		</section>
	)
}
