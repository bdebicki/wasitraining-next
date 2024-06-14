import React from 'react'
import { RainDetails } from '@/app/editions/_components/rain-details'
import type { RainDetails as Details, Rain } from '@/types/rain'
import { setRainFromProp } from '@/utils/setRainFromProp'

type Props = {
	isRaining: Rain
	details: Details
}

export const RainInfo = ({ isRaining, details }: Props) => (
	<section>
		<header>
			<h3>Rain</h3>
			{isRaining ? <RainDetails details={details} /> : null}
		</header>
		{setRainFromProp(isRaining)}
	</section>
)
