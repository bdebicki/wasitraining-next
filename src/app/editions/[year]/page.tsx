import React from 'react'
import path from 'path'
import fs from 'fs'
import { EditionPageTemplate } from '@/app/editions/_components/edition-page-template'
import { getEditionsData } from '@/utils/getEditionsData'

type Props = {
	params: {
		year: string
	}
}

type Edition = {
	id: number
	editionYear: string
	fullName: string
	place: {
		city: string
		object: string
	}
	details: Array<{
		day: string
		rain: boolean
		rainSize?: string
		rainDataUrl: string[]
		lineup: {
			headliners: string[] | { artist: string; [key: string]: any }[]
			others?: Array<string | { artist: string; [key: string]: any }>
			lvl1?: string[]
			lvl2?: Array<string | { artist: string; [key: string]: any }>
		}
	}>
}

const EditionPage = async ({ params }: Props) => {
	const { year } = params
	const filePath = path.join(
		process.cwd(),
		'public',
		'editions',
		`edition${year}.json`
	)
	const fileContents = await fs.promises.readFile(filePath, 'utf8')
	const edition: Edition = JSON.parse(fileContents)

	return (
		<EditionPageTemplate>
			{edition.fullName} - {edition.editionYear}
		</EditionPageTemplate>
	)
}

export async function generateStaticParams() {
	const editions = await getEditionsData()

	return editions.map((edition) => ({
		year: edition.editionYear,
	}))
}

export default EditionPage
