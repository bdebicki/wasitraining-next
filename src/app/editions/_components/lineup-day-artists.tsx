import React from 'react'
import type { Artist } from '@/types/editions'

type Props = {
	headliners?: Array<Artist>
	lvl1?: Array<Artist>
	lvl2?: Array<Artist>
	others?: Array<Artist>
}

const renderArtist = (artists: Array<Artist>) =>
	artists.map((artist: Artist) => {
		if (typeof artist === 'string') {
			return <li key={artist}>{artist}</li>
		} else if (artist.canceled) {
			return (
				<li key={artist.artist}>
					<del>{artist.artist}</del> {artist.replacement}
				</li>
			)
		} else {
			return <li key={artist.artist}>{artist.artist}</li>
		}
	})

export const LineupDayArtists = ({ headliners, lvl1, lvl2, others }: Props) => (
	<>
		{headliners ? <ul>{renderArtist(headliners)}</ul> : null}
		{lvl1 ? <ul>{renderArtist(lvl1)}</ul> : null}
		{lvl2 ? <ul>{renderArtist(lvl2)}</ul> : null}
		{others ? <ul>{renderArtist(others)}</ul> : null}
	</>
)
