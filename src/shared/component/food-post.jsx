// @flow

import React from 'react'

type Props = {
	picture: string,
}

const FoodPost = ({ picture }: Props) => (
	<div className="relative col col-12 lg-col-3 md-col-3 sm-col-12 my1 mb2 px2 overflow-hidden">
		<picture>
			<img alt="Food!" src={picture} />
		</picture>
		<div className="absolute left-0 right-0 bottom-0 bg-white">
			Sweet placeholder text
		</div>
	</div>
)

export default FoodPost
