export type Artist =
	| string
	| { artist: string; canceled: boolean; replacement?: string }
export type Year = string
export type ArtistList = Array<Artist>
export type EditionInformation = {
	year: Year
	fullName: string
	place: {
		city: string
		object: string
	}
}
export type Lineup = {
	headliners?: ArtistList
	lvl1?: ArtistList
	lvl2?: ArtistList
	others?: ArtistList
}
export type EditionDetails = Array<{
	day: string
	rain: boolean
	rainSize?: string
	rainDataUrl: Array<string>
	lineup: Lineup
}>

export type Edition = EditionInformation & {
	id: number
	details: EditionDetails
}
export type DailyLineup = Array<{
	day: string
	artists: Lineup
}>
