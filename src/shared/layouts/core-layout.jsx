// @flow

import React from 'react'
import Header from '../component/header'

type Props = {
	children: ?any
}

const CoreLayout = ({ children }: Props) => (
	<div className="page-container flex flex-column">
		<Header />
		<div className="relative content-outer bg-gray">
			{children}
		</div>
	</div>
)

export default CoreLayout

