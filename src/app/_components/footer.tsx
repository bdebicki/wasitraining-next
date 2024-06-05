import React from 'react'
import { Link } from '@/app/_system/link'
import { ActionGroup } from '@/app/_system/action-group'

export const Footer = () => (
	<footer>
		<p>
			yep. this site uses cookies. click <Link href="/cookies">here</Link>{' '}
			for more
		</p>
		<section>
			<p>
				made with ❤ in{' '}
				<Link
					href="https://en.wikipedia.org/wiki/Gdynia"
					target="_blank"
				>
					Gdynia
				</Link>{' '}
				2024
			</p>
			<ActionGroup
				actions={[
					<Link key="footer-about" href="/about">
						about
					</Link>,
					<Link
						key="footer-coffe"
						href="https://buymeacoffee.com/"
						target="_blank"
					>
						buy me a coffe
					</Link>,
				]}
			/>
		</section>
	</footer>
)
