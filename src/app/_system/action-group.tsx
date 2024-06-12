import React, { ReactElement } from 'react'

type Props = {
	actions: Array<ReactElement>
}

export const ActionGroup = ({ actions }: Props) => (
	<ul>
		{actions.map((action) => (
			<li key={action.key}>{action}</li>
		))}
	</ul>
)
