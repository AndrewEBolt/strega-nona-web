// @flow

import styled from 'styled-components'
import React from 'react'
import { MdLocationOn } from 'react-icons/lib/md'

import IconMd from './icon-md'

const Picture = styled.picture`
	background-color: gray;
	display: block;
	height: 350px;
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
	<div className="relative col col-12 lg-col-4 md-col-4 sm-col-12 my1 mb3 px2 overflow-hidden">
		<Picture>
			<Image picture={picture} />
		</Picture>
		<ul className="list-reset absolute flex flex-column m0 py1 px1 mx2 left-0 right-0 bottom-0 bg-white">
			<li className="flex items-center pb1">
				<IconMd><MdLocationOn className="muted" /></IconMd>
				<span className="muted">{location}</span>
			</li>
			<li className="pb1 bold truncate"><span>Username</span></li>
			<li className="truncate"><span>{description}</span></li>
		</ul>
	</div>
)

export default FoodPost
