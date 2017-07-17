// @flow

import styled from 'styled-components'
import React from 'react'
import { MdLocationOn } from 'react-icons/lib/md'

import IconMd from './icon-md'

const Picture = styled.picture`
	background-color: gray;
	display: block;
	height: 220px;
	width: 100%;
`

const Image = styled.div`
	background-image: url(${props => props.picture});
	height: 220px;
	width: 100%;
`

type Props = {
	location: string,
	picture: string,
}

const FoodPost = ({ location, picture }: Props) => (
	<div className="relative col col-12 lg-col-4 md-col-4 sm-col-12 my1 mb2 px2 overflow-hidden">
		<Picture>
			<Image picture={picture} />
		</Picture>
		<div className="absolute px2 left-0 right-0 bottom-0 bg-white">
			<IconMd><MdLocationOn /></IconMd>
			<span>{location}</span>
		</div>
	</div>
)

export default FoodPost
