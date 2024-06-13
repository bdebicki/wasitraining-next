import React from 'react'
import path from 'path'
import fs from 'fs'
import {
	getEditionsData,
	getDateFromEdition,
	getHeadlinersFromEdition,
	getRainDetailsFromEdition,
	getRainFromEdition,
	getDailyLineupFromEdition,
} from '@/utils/edition'
import { PageTemplate } from '@/app/_templates/page-template'
import type { Edition } from '@/types/editions'
import { EditionInfo } from '@/app/editions/_components/edition-info'
import { RainInfo } from '@/app/editions/_components/rain-info'

type Props = {
	params: {
		year: string
	}
}

const EditionPage = async ({ params }: Props) => {
	const { year: editionYear } = params
	const filePath = path.join(
		process.cwd(),
		'public',
		'editions',
		`edition${editionYear}.json`
	)
	const fileContents = await fs.promises.readFile(filePath, 'utf8')
	const { fullName, year, place, details }: Edition = JSON.parse(fileContents)
	const headliners = getHeadlinersFromEdition(details)
	const date = getDateFromEdition(details)
	const isRaining = getRainFromEdition(details)
	const rainDetails = getRainDetailsFromEdition(details)
	const lineup = getDailyLineupFromEdition(details)

	return (
		<PageTemplate>
			<EditionInfo
				year={year}
				fullName={fullName}
				place={place}
				date={date}
				headliners={headliners}
				lineup={lineup}
			/>
			<RainInfo isRaining={isRaining} details={rainDetails} />
		</PageTemplate>
	)
}

export async function generateStaticParams() {
	const editions: Array<Edition> = await getEditionsData()

	return editions.map((edition): { year: string } => ({
		year: edition.year,
	}))
}

export default EditionPage
