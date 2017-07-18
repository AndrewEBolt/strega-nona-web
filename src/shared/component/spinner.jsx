// @flow

import React from 'react'
import styled from 'styled-components'

const SpinnerWrapper = styled.div`
	position: relative;
	margin: 0 auto;
	width: 50px;
	::before {
		content: '';
    display: block;
    padding-top: 100%;
	}
`

const SpinnerSvg = styled.svg`
	animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @keyframes rotate {
	  100% {
	    transform: rotate(360deg);
	  }
	}
`

const Circle = styled.circle`
	stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;

  @keyframes dash {
	  0% {
	    stroke-dasharray: 1, 200;
	    stroke-dashoffset: 0;
	  }
	  50% {
	    stroke-dasharray: 89, 200;
	    stroke-dashoffset: -35px;
	  }
	  100% {
	    stroke-dasharray: 89, 200;
	    stroke-dashoffset: -124px;
	  }
	}

	@keyframes color {
	  100%,
	  0% {
	    stroke: black;
	  }
	  40% {
	    stroke: red;
	  }
	  78% {
	    stroke: green;
	  }
	  80%,
	  90% {
	    stroke: yellow;
	  }
	}
`

const Spinner = () => (
	<SpinnerWrapper>
		<SpinnerSvg viewBox="25 25 50 50">
			<Circle cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" />
		</SpinnerSvg>
	</SpinnerWrapper>
)

export default Spinner

