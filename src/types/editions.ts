export type Artist =
	| string
	| { artist: string; canceled: boolean; replacement?: string }
export type EditionInformation = {
	year: string
	fullName: string
	place: {
		city: string
		object: string
	}
}
export type Lineup = {
	headliners: Array<Artist>
	lvl1?: Array<Artist>
	lvl2?: Array<Artist>
	others?: Array<Artist>
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
