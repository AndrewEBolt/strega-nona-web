// @flow

import styled from 'styled-components'
import React from 'react'
import { MdLocationOn } from 'react-icons/lib/md'

import IconMd from './icon-md'

const Picture = styled.picture`
	background-color: gray;
	display: block;
	height: 280px;
	width: 100%;
`

const Image = styled.div`
	background-image: url(${props => props.picture});
	height: 280px;
	width: 100%;
`

type Props = {
	description: string,
	location: string,
	picture: string,
}

const FoodPost = ({ description, location, picture }: Props) => (
	<div className="relative col col-12 lg-col-4 md-col-4 sm-col-12 my1 mb2 px2 overflow-hidden">
		<Picture>
			<Image picture={picture} />
		</Picture>
		<div className="absolute flex flex-column py1 px2 left-0 right-0 bottom-0 bg-white">
			<div className="pb1">
				Username
			</div>
			<div className="pb1">
				{description}
			</div>
			<div className="flex items-center">
				<IconMd><MdLocationOn className="muted" /></IconMd>
				<span className="muted">{location}</span>
			</div>
		</div>
	</div>
)

export default FoodPost
