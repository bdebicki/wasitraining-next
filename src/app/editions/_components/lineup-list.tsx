import React from 'react'
import type { Artist, DailyLineup } from '@/types/editions'

type Props = {
	lineup: DailyLineup
}

const renderArtists = (artists: Array<Artist>) =>
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

export const LineupList = ({ lineup }: Props) => {
	return (
		<div>
			{lineup.map(
				({ day, artists: { headliners, lvl1, lvl2, others } }) => (
					<div key={day}>
						<h4>{day}</h4>
						{headliners ? (
							<ul>{renderArtists(headliners)}</ul>
						) : null}
						{lvl1 ? <ul>{renderArtists(lvl1)}</ul> : null}
						{lvl2 ? <ul>{renderArtists(lvl2)}</ul> : null}
						{others ? <ul>{renderArtists(others)}</ul> : null}
					</div>
				)
			)}
		</div>
	)
}
