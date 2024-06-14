import { Lato } from 'next/font/google'
import './globals.css'
import { Background } from '@/components/background'
import React from 'react'

const lato = Lato({
	weight: ['400', '700'],
	subsets: ['latin'],
	style: ['normal'],
})

type Props = Readonly<{
	children: React.ReactNode
}>

const RootLayout = ({ children }: Props) => (
	<html lang="en">
		<body className={lato.className}>
			{children}
			<Background />
		</body>
	</html>
)

export default RootLayout
