import path from 'path'
import fs from 'fs/promises'

export const getEditionsData = async () => {
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
