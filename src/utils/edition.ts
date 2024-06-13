import path from 'path'
import fs from 'fs/promises'
import type {
	DailyLineup,
	Edition,
	EditionDetails,
	Lineup,
} from '@/types/editions'
import type { Props as EditionInfoProps } from '@/app/editions/_components/edition-info'
import type { Rain, RainDetails } from '@/types/rain'

export const getEditionsData = async (): Promise<Array<Edition>> => {
	const editionsDir = path.join(process.cwd(), 'public', 'editions')
	const filenames = await fs.readdir(editionsDir)

	return await Promise.all(
		filenames.map(async (filename) => {
			const filePath = path.join(editionsDir, filename)
			const fileContents = await fs.readFile(filePath, 'utf8')
			return JSON.parse(fileContents)
		})
	)
}

export const getHeadlinersFromEdition = (
	details: EditionDetails
): EditionInfoProps['headliners'] => {
	return details.flatMap(
		({ lineup }: { lineup: Lineup }) => lineup.headliners
	)
}

export const getDateFromEdition = (
	details: EditionDetails
): EditionInfoProps['date'] => {
	return {
		start: details[0].day,
		end: details.length !== 1 ? details[details.length - 1].day : undefined,
	}
}

export const getRainFromEdition = (details: EditionDetails): Rain => {
	return details.some(({ rain }) => rain)
}

export const getRainDetailsFromEdition = (
	details: EditionDetails
): RainDetails => {
	return details.map(({ day, rain }) => ({
		date: day,
		isRaining: rain,
	}))
}

export const getDailyLineupFromEdition = (
	details: EditionDetails
): DailyLineup => {
	return details.map(({ day, lineup }) => ({ day: day, artists: lineup }))
}
