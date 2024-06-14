import { Background } from '@/components/background'
import { Footer } from '@/components/footer'

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
