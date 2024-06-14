import React from 'react'
import type { Artist, ArtistList } from '@/types/editions'

type Props = {
	headliners: ArtistList
}

export const HeadlinersList = ({ headliners }: Props) => (
	<ul>
		{headliners.map((artist: Artist) => {
			return typeof artist === 'string' ? (
				<li key={artist}> {artist}</li>
			) : !artist.canceled ? (
				<li key={artist.artist}> {artist.artist}</li>
			) : null
		})}
	</ul>
)
