import { Background } from '@/app/_components/background'
import { Footer } from '@/app/_components/footer/footer'

type Props = Readonly<{
	children: React.ReactNode
	mode?: 'home' | 'page'
}>

export const RootLayoutTemplate = ({ children, mode = 'page' }: Props) => (
	<>
		{children}
		<Footer mode={mode === 'home' ? 'light' : 'dark'} />
	</>
)
